import { siteConfig } from '../config/siteConfig.js';

export function ContactSection() {
  const { phone, email, wechatQrSrc } = siteConfig.contact;
  return (
    <section id="contact" data-section="contact" className="section contact-section">
      <div className="contact-copy">
        <p className="eyebrow">STAY IN TOUCH</p>
        <h2>保持联系。</h2>
        <p className="contact-lead">如果你想交流技术、创意，或只是分享一个有趣的想法，<br />欢迎通过下面的方式找到我。</p>
        <div className="contact-channels">
          <a href={`tel:${phone.replace(/\s/g, '')}`}>
            <span>PHONE / 电话</span><strong>{phone}</strong><small>CONFIG · PHONE</small>
          </a>
          <a href={`mailto:${email}`}>
            <span>EMAIL / 邮箱</span><strong>{email}</strong><small>CONFIG · EMAIL</small>
          </a>
        </div>
      </div>
      <aside className="wechat-panel">
        <div className="wechat-index"><span>WECHAT / 微信</span><b>03</b></div>
        <figure className="qr-card">
          <div className="qr-crop"><img loading="lazy" src={wechatQrSrc} alt="赵元浦的微信二维码" /></div>
          <figcaption>微信二维码 <span>SCAN TO CONNECT</span></figcaption>
        </figure>
        <p>扫一扫，添加我为朋友 <b>↗</b></p>
      </aside>
      <div className="contact-drafting" aria-hidden="true">
        <span>E3 LIBRARY / FRONT ELEVATION</span><i />
      </div>
      <div className="library-assembly" data-building="library">
        {Array.from({ length: 7 }, (_, index) => (
          <div
            className="building-slice"
            key={index}
            style={{ clipPath: `inset(0 ${(6 - index) * 100 / 7}% 0 ${index * 100 / 7}%)` }}
          >
            <img loading="lazy" src="./assets/images/library-front-lineart.webp" alt="" />
          </div>
        ))}
      </div>
      <div className="contact-axis" aria-hidden="true" />
      <div className="contact-index">CONTACT / 04</div>
    </section>
  );
}
