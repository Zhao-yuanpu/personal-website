import { siteConfig } from '../config/siteConfig.js';

export function Header({ currentSection }) {
  const goTo = (event, target) => {
    event.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={(event) => goTo(event, 'home')}>
        <strong>赵元浦</strong><span>/ ZHAO YUANPU</span>
      </a>
      <nav aria-label="主导航">
        {siteConfig.navigation.map((item) => (
          <a
            key={item.target}
            className={currentSection === item.target ? 'active' : ''}
            href={`#${item.target}`}
            onClick={(event) => goTo(event, item.target)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
