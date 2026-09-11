import { useEffect, useRef } from 'react';
import { animate, createScope, createTimeline, stagger, svg } from 'animejs';

const sectionNames = ['home', 'growth', 'interests', 'contact'];

function animateHero() {
  createTimeline({ defaults: { ease: 'out(4)' } })
    .add('.hero-city-layer', { opacity: [0, 1], scale: [0.985, 1], x: (_, index) => index === 0 ? [-46, 0] : index === 2 ? [46, 0] : [0, 0], filter: ['blur(5px)', 'blur(0px)'], duration: 1150, delay: stagger(130) }, 0)
    .add('.hero-portrait-wrap', { opacity: [0, 1], y: [42, 0], scale: [0.97, 1], filter: ['blur(8px) brightness(.72)', 'blur(0px) brightness(1)'], duration: 1100 }, 180)
    .add('.hero-title span', { opacity: [0, 1], y: ['115%', '0%'], duration: 850, delay: stagger(110) }, 430)
    .add('.hero-meta, .hero-tags', { opacity: [0, 1], y: [16, 0], duration: 620, delay: stagger(80) }, 650)
    .add('.hero-route, .city-label, .hero-direction, .scroll-cue', { opacity: [0, 1], y: [8, 0], duration: 620, delay: stagger(70) }, 900);
}

function animateGrowth() {
  animate(svg.createDrawable('.timeline-path'), {
    draw: ['0 0', '0 1'],
    duration: 1700,
    ease: 'inOut(3)',
  });
  animate('.milestone', {
    opacity: [0, 1],
    x: [-20, 0],
    delay: stagger(150, { start: 180 }),
    duration: 680,
    ease: 'out(4)',
  });
  animate('.certificate-card', {
    opacity: [0, 1],
    y: [60, 0],
    rotate: (_, index) => index ? [-4, -1.5] : [4, 1.8],
    delay: stagger(180, { start: 340 }),
    duration: 980,
    ease: 'out(4)',
  });
}

function animateInterests() {
  animate('.interests-header > *', {
    opacity: [0, 1],
    y: [30, 0],
    duration: 760,
    delay: stagger(130),
    ease: 'out(4)',
  });
  animate('.interest-module', {
    opacity: [0, 1],
    y: [78, 0],
    scale: [0.96, 1],
    rotateY: (_, index) => [index === 0 ? -8 : index === 2 ? 8 : 0, 0],
    delay: stagger(140, { start: 220 }),
    duration: 1000,
    ease: 'out(4)',
  });
}

function animateContact() {
  animate('.contact-copy > *, .wechat-panel', {
    opacity: [0, 1],
    y: [28, 0],
    filter: ['blur(6px)', 'blur(0px)'],
    duration: 780,
    delay: stagger(100),
    ease: 'out(4)',
  });
  animate('.building-slice', {
    opacity: [0, 1],
    x: (_, index) => [(index - 3) * 26, 0],
    y: (_, index) => [Math.abs(index - 3) * 18 + 24, 0],
    scale: [0.93, 1],
    filter: ['blur(5px) brightness(1.8)', 'blur(0px) brightness(1)'],
    duration: 1050,
    delay: stagger(75, { from: 'center', start: 200 }),
    ease: 'out(4)',
  });
  animate('.qr-crop img', { filter: ['blur(7px)', 'blur(0px)'], opacity: [0.55, 1], duration: 900, delay: 540, ease: 'out(3)' });
  animate('.contact-axis', { opacity: [0, 0.55], scale: [0.8, 1], duration: 900, delay: 480, ease: 'out(4)' });
}

const sectionAnimations = {
  home: animateHero,
  growth: animateGrowth,
  interests: animateInterests,
  contact: animateContact,
};

export function MotionDirector({ children, onSectionChange }) {
  const root = useRef(null);
  const scope = useRef(null);
  const activeSection = useRef('home');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animated = new Set();

    scope.current = createScope({ root, mediaQueries: { reducedMotion: '(prefers-reduced-motion: reduce)' } }).add(() => {
      if (!reducedMotion) animateHero();
    });

    if (!reducedMotion) animated.add('home');

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const name = visible.target.dataset.section;
      if (activeSection.current === name) return;
      const previousIndex = sectionNames.indexOf(activeSection.current);
      activeSection.current = name;
      onSectionChange(name);
      root.current.dataset.currentSection = name;
      root.current.dataset.scrollDirection = sectionNames.indexOf(name) > previousIndex ? 'forward' : 'backward';
      if (!reducedMotion && !animated.has(name)) {
        animated.add(name);
        scope.current.add(sectionAnimations[name]);
      }
      if (!reducedMotion) {
        animate('.journey-locator', {
          translateY: `${sectionNames.indexOf(name) * 27}vh`,
          scale: name === 'interests' ? 1.35 : 1,
          duration: 850,
          ease: 'out(4)',
        });
      }
    }, { threshold: [0.12, 0.35, 0.55, 0.72] });

    root.current.querySelectorAll('[data-section]').forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      scope.current?.revert();
    };
  }, [onSectionChange]);

  return (
    <div ref={root} className="site-shell" data-current-section="home">
      <div className="journey-rail" aria-hidden="true"><span className="journey-locator" /></div>
      <div className="section-counter" aria-hidden="true"><span>01</span><i />04</div>
      {children}
    </div>
  );
}
