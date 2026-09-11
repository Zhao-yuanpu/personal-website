const milestones = [
  { phase: '小学阶段', title: '钢琴十级', detail: '多次舞台与比赛经历 · 青少年组金奖' },
  { phase: '2020', title: 'AMC 8 Honor Roll', detail: '全球前 5%' },
  { phase: '初中阶段', title: 'AI 语音博客实践', detail: '独立完成 · 总播放量 30万+' },
  { phase: '高中阶段', title: '物理竞赛经历', detail: '全国中学生奥林匹克物理竞赛' },
  { phase: '2026', title: '计算机科学与技术', detail: '华南理工大学 · 新的起点' },
];

export function GrowthSection() {
  return (
    <section id="growth" data-section="growth" className="section growth-section">
      <div className="section-heading growth-heading">
        <p className="eyebrow">GROWTH / HONORS</p>
        <h2>成长有迹，<br />荣誉有声。</h2>
        <p>从兴趣启蒙到主动实践，重要的不只是结果，<br />也是一次次把想法变成行动的过程。</p>
      </div>

      <div className="timeline-wrap">
        <svg className="timeline-svg" viewBox="0 0 80 640" aria-hidden="true">
          <path data-drawable="timeline" className="timeline-path" d="M40 12 C18 96 62 136 40 218 C18 302 62 350 40 430 C18 510 55 564 40 628" />
        </svg>
        <ol className="milestones">
          {milestones.map((item, index) => (
            <li key={item.title} className="milestone" style={{ '--i': index }}>
              <span className="milestone-node" />
              <span className="milestone-phase">{item.phase}</span>
              <strong>{item.title}</strong>
              <small>{item.detail}</small>
            </li>
          ))}
        </ol>
      </div>

      <div className="honor-archive">
        <figure className="certificate-card certificate-card--amc">
          <img loading="lazy" src="./assets/images/amc-certificate.webp" alt="AMC 8 Honor Roll 前5%证书" />
          <figcaption><span>01 / AMC 8</span><strong>HONOR ROLL · TOP 5%</strong></figcaption>
        </figure>
        <figure className="certificate-card certificate-card--ai">
          <img loading="lazy" src="./assets/images/ai-advanced-certificate.webp" alt="人工智能训练师高级证书，编号已隐藏" />
          <figcaption><span>02 / AI TRAINER</span><strong>ADVANCED · 2026</strong></figcaption>
        </figure>
        <div className="archive-index">ARCHIVE<br /><b>02</b></div>
      </div>
    </section>
  );
}
