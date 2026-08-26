function CityLineArt() {
  return (
    <svg className="city-line-art" viewBox="0 0 1600 520" aria-hidden="true">
      <g className="city-group city-group--xian" fill="none" stroke="currentColor">
        <path d="M0 434H530M30 434V360h34v74m18 0V326h32v108m22 0V380h38v54m24 0V346h28v88m38 0V385h46v49m26 0V355h34v79" />
        <path d="M46 412h270M82 348h94l-12-16H94zM104 332v-78h52v78m-44-78 18-32 18 32M119 282h28M119 300h28M119 318h28" />
        <path d="M0 392l44-24 38 16 55-28 48 22 48-42 46 38 62-25 72 32 58-18 59 28" opacity=".5" />
      </g>
      <g className="city-group city-group--guangzhou" fill="none" stroke="currentColor">
        <path d="M1110 434h490m-430 0v-82h45v82m38 0v-132h34v132m49 0v-72h48v72m36 0v-114h38v114m38 0v-64h42v64" />
        <path d="M1358 434c18-92 21-178 27-268 5-58 16-92 34-120 18 28 29 62 34 120 6 90 9 176 27 268M1381 354h76m-68-68h60m-54-64h48m-38-61h28M1419 46V8" />
        <path d="M1364 378l109-210M1474 378l-109-210M1381 112h76" opacity=".7" />
      </g>
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="home" data-section="home" className="section hero-section">
      <div className="ambient-orbit ambient-orbit--one" />
      <div className="ambient-orbit ambient-orbit--two" />
      <CityLineArt />
      <div className="hero-route" aria-hidden="true">
        <span className="route-origin" /><span className="route-curve" /><span className="route-destination" />
      </div>
      <div className="hero-portrait-wrap" data-portrait>
        <div className="portrait-glow" />
        <img src="./assets/images/avatar.png" alt="赵元浦个人头像" className="hero-portrait" />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">XI’AN / GUANGZHOU · 2026</p>
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
      <a className="scroll-cue" href="#growth" aria-label="前往成长经历">↘</a>
    </section>
  );
}
