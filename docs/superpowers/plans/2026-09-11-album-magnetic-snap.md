# 专辑磁吸与滑动手感修改计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 主专辑松手自动对齐，短促轻甩可以切换，重新触摸立即接管动画，连续浏览不卡顿。

**Architecture:** 沿用 Three.js 场景、GSAP 吸附和 requestAnimationFrame 渲染合并。拖动直接更新连续 cursor；松手根据位移和最近速度计算目标整数索引，再以短缓出动画对齐。内容几何与输入手感分别处理。

**Tech Stack:** React、Three.js、GSAP、Node 内置测试、Playwright。

**Spec:** 本任务用户要求“最顶端呈现的一个专辑做一个磁吸的效果，滑少或滑多一点都能吸上去，整个的滑动动画流畅一些，阻力别这么大”。本计划将“最顶端”理解为最前层、正对用户的活动专辑，吸附位置沿用现有主展示位；本轮只生成计划。

## Global Constraints

- 手机优先，覆盖 375×667、390×844 和桌面 1280×800。
- 保留既有封面、顺序、链接、3D 叠层及移动端 2.4 单位卡片间距。
- 不新增依赖；复用现有 GSAP 与帧合并机制。
- 不自动提交、推送或部署；保留上一轮未提交的加载优化。
- 下列数值是第一轮调参起点，最终以交互验证为准。

## 当前代码依据

- `专辑/src/albumScene.js` 的 `onPointerMove`：移动端一张的拖动距离为 `max(canvasHeight * 0.27, 160)`，松手通过四舍五入吸附，因此常需移动至少约 80 像素才换页。
- `onPointerUp` 只使用位置，没有释放前速度，短促轻甩容易回到原张。
- `onPointerDown` 没有停止旧 cursor 动画，重新拖动可能与旧吸附动画争抢位置。
- `onWheel` 每 320ms 只接受一次输入；`moveBy` 基于当前显示位置取整，连续输入可能反复指向相同目标。
- 当前封面只加载活动索引 ±2，而 mesh 可见范围为 ±4.35；提高手感后需验证边缘封面是否出现空白，加载范围应覆盖真实可见项。

## 文件范围

- 修改 `专辑/src/albumScene.js`：吸附目标、手势速度、接管动画、连续滚轮输入、可见封面准备。
- 扩展 `tests/album-page.test.mjs`：目标计算与边界用例。
- 按需调整 `专辑/src/AlbumPage.jsx`：仅处理方向键/Home/End 与新目标状态衔接。
- 构建生成 `专辑/assets/app.js`，更新 `专辑/index.html` 缓存版本。
- 浏览器验证脚本与截图放临时目录，不加入网站源码。

## Task 1：定义磁吸目标并降低拖动距离

**Interfaces:** 新增纯函数 `getAlbumSnapTarget({ start, cursor, velocity, count }) -> integer`；velocity 单位为“专辑/秒”，仅使用释放前约 80–120ms 的样本。保留 `clampAlbumIndex` 和 `getAlbumPose`。

- [ ] 在现有测试中添加小幅拖动归位、慢拖跨越阈值、少滑/多滑吸附同一张、快速轻甩、反向甩动及首尾夹紧用例。先确认新函数缺失使测试失败。

```js
const snap = (cursor, velocity = 0) => getAlbumSnapTarget({ start: 3, cursor, velocity, count: 12 });
assert.equal(snap(3.05), 3);
assert.equal(snap(3.35), 4);
assert.equal(snap(3.85), 4);
assert.equal(snap(3.12, 3), 4);
assert.equal(snap(2.88, -3), 2);
assert.equal(getAlbumSnapTarget({ start: 0, cursor: -0.2, velocity: -3, count: 12 }), 0);
assert.equal(getAlbumSnapTarget({ start: 11, cursor: 11.2, velocity: 3, count: 12 }), 11);
```

- [ ] 使用有上限的速度预测，慢拖约跨过 0.28 张即可按方向吸附，微小无意移动回原张。算法起点如下，验证时补充连续拖动及反向用例：

```js
const projected = cursor + clamp(velocity * 0.18, -0.65, 0.65);
const offset = projected - start;
const target = Math.abs(offset) < 0.28 ? start
  : start + Math.sign(offset) * Math.max(1, Math.round(Math.abs(offset)));
return clampAlbumIndex(target, count);
```

- [ ] 将手机每张拖动距离起点改为 `clamp(canvas.clientHeight * 0.18, 110, 150)`；桌面采用 `clamp(canvas.clientWidth * 0.15, 180, 260)`。沿主轴判定拖动，保留防误点距离。
- [ ] 记录近期带时间戳的主轴位置；释放前停顿超过 120ms 时速度归零。持续采样而非整段平均速度，避免拖动后停住仍惯性翻页。
- [ ] 执行 `node --test tests/album-page.test.mjs`，检查目标索引稳定且不越界。

## Task 2：动画可接管、顺畅收尾和连续输入

- [ ] `onPointerDown` 先取消 cursor 的吸附 tween，再从实际 cursor 建立拖动起点。不要重置到旧目标或整数位置；拖动过程中不施加磁吸阻力。
- [ ] 松手调用新纯函数，使用约 0.25–0.35 秒 `power2.out` 缓出吸附；保留 reduced-motion 的短时对齐。避免弹跳和长时间漂移。
- [ ] 保存待到达的整数目标，方向键与离散滚轮事件基于目标累积，而不是对尚在运动的 cursor 反复取整。Home/End 使用明确目标，避免循环调用移动函数。
- [ ] 将桌面触控板的 delta 累积为连续位移，停止输入约 100–140ms 后吸附；归一化 deltaMode，过滤零位移，避免触控板尾部事件重复翻页。普通滚轮采用累积阈值换张，撤掉固定 320ms 丢事件窗口。
- [ ] 新手势接管时清除滚轮收尾计时器；pointercancel 恢复到合法位置，不触发外链；destroy 清理新增定时器与动画。
- [ ] 保留单帧渲染合并。只在整数活动索引改变时更新标题计数；保证当前可见专辑封面优先请求，检查释放后的纹理上传是否造成停顿。

## Task 3：验证手感与回归

- [ ] 手机三个手势长度分别验证：极短慢拖归原位、略少于一张吸到下一张、略多于一张仍回到同一目标。验证短促轻甩、长拖多张和反向滑动。
- [ ] 吸附中途按下并反向拖动：从手下位置继续，无拉回、突跳或误开 Apple Music。
- [ ] 首尾轻拖仅有小幅边界余量，松手归位；连续快速操作后索引和标题一致。
- [ ] 桌面验证鼠标拖动、密集滚轮/触控板输入、方向键与 Home/End；保持单击外链和键盘可达。
- [ ] 在 375×667、390×844、1280×800 截图并检查 3D 遮挡和封面完整性。检查 reduced-motion 模式与控制台。
- [ ] 同一设备记录改前/改后拖动帧耗时和明显长帧，确认无持续掉帧；浏览器模拟不能替代手机真机手感，交付本地预览供用户最终确认力度。
- [ ] 运行 `npm run build`、`npm test`、`git diff --check`；复测生成的构建，确认仅预期文件变化。报告验证结果与本地预览，不执行发布。
