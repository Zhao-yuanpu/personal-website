const cityLayers = ['xian', 'campus', 'guangzhou'];

export function HeroSection() {
  return (
    <section id="home" data-section="home" className="section hero-section">
      <div className="hero-city" aria-hidden="true">
        {cityLayers.map((layer) => (
          <img key={layer} src="./assets/images/hero-city-panorama.webp" alt="" className={`hero-city-layer hero-city-layer--${layer}`} />
        ))}
      </div>
      <div className="hero-route" aria-hidden="true">
        <svg viewBox="0 0 1400 170" preserveAspectRatio="none">
          <path className="route-curve" d="M38 62 C350 122 685 118 824 72 C938 35 1014 148 1210 138 C1290 134 1340 139 1366 143" />
        </svg>
        <span className="route-origin" /><span className="route-destination" />
      </div>
      <div className="hero-portrait-wrap" data-portrait>
        <img src="./assets/images/avatar.webp" alt="赵元浦个人头像" className="hero-portrait" />
      </div>
      <div className="hero-copy">
        <h1 className="hero-title"><span>从西安出发，</span><span>在广州继续探索。</span></h1>
        <div className="hero-meta">
          <p>华南理工大学 · 计算机科学与技术</p>
          <p>2026—2030 · 大学城校区</p>
        </div>
        <p className="hero-tags">技术 / 音乐 / 运动 / 电影</p>
      </div>
      <div className="city-label city-label--left">XI’AN</div>
      <div className="city-label city-label--right">GUANGZHOU</div>
      <div className="hero-direction">XI’AN　→　GUANGZHOU</div>
      <a className="scroll-cue" href="#growth" aria-label="前往成长经历">↗</a>
    </section>
  );
}
