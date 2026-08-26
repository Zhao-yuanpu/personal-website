import { siteConfig } from '../config/siteConfig.js';
import { MusicModule } from '../interests/MusicModule.jsx';
import { SportsModule } from '../interests/SportsModule.jsx';
import { MoviesModule } from '../interests/MoviesModule.jsx';

const modules = [MusicModule, SportsModule, MoviesModule];

export function InterestsSection() {
  return (
    <section id="interests" data-section="interests" className="section interests-section">
      <div className="interests-header">
        <div>
          <p className="eyebrow">兴趣 / INTERESTS</p>
          <h2>我的生活，不止一种节奏。</h2>
        </div>
        <p>从舞台到跑道，再到银幕。兴趣并非标签，<br />而是我持续体验、理解与表达世界的方式。</p>
      </div>
      <div className="interest-grid">
        {siteConfig.interests.map((item, index) => {
          const Module = modules[index];
          return <Module key={item.id} item={item} />;
        })}
      </div>
      <p className="interest-route-note">DETAIL ROUTES RESERVED　/　MUSIC · SPORTS · MOVIES</p>
    </section>
  );
}
