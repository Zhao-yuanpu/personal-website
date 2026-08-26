# 个人简历网站

直接双击 `index.html` 即可进入网站；整套文件也可以直接部署到 GitHub Pages。

## 修改个人信息

网站的常用内容集中在 `src/config/siteConfig.js`：

- 电话：`contact.phone`
- 邮箱：`contact.email`
- 微信二维码：`contact.wechatQrSrc`
- 兴趣板块文案与跳转地址：`interests`

替换二维码图片时，可直接覆盖 `assets/images/wechat-qr.png`，也可以在配置文件中改成新的相对路径。

兴趣板块已经保留三个独立入口：

- `#/interests/music`
- `#/interests/sports`
- `#/interests/movies`

目前入口显示占位模块，后续可以在不修改主页面结构的情况下继续完善。

## 修改后重新生成网页

首次使用先运行：

```powershell
npm install
```

修改 `src` 中的代码或配置后运行：

```powershell
npm run build
```

检查项目：

```powershell
npm test
```

部署时只需要提交这个“网页”文件夹中的内容。
