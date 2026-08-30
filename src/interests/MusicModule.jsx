import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { InterestModule } from './InterestModule.jsx';
import { getAlbumPortalTransform, shouldAnimateAlbumPortal } from './albumPortal.js';

gsap.registerPlugin(useGSAP);

export function MusicModule({ item }) {
  const moduleRef = useRef(null);
  const layerRef = useRef(null);
  const timelineRef = useRef(null);
  const { contextSafe } = useGSAP(() => () => {
    timelineRef.current?.kill();
    layerRef.current?.remove();
    document.documentElement.classList.remove('album-portal-active');
  }, { scope: moduleRef });

  const openAlbum = contextSafe((event) => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!shouldAnimateAlbumPortal(event, reducedMotion)) return;
    event.preventDefault();
    if (timelineRef.current) return;

    const card = moduleRef.current;
    const image = card.querySelector('.interest-image');
    const shell = card.closest('.site-shell');
    const rect = card.getBoundingClientRect();
    const imageStyle = window.getComputedStyle(image);
    const target = getAlbumPortalTransform(rect, { width: window.innerWidth, height: window.innerHeight });
    const layer = document.createElement('div');
    const backdrop = document.createElement('div');
    const cover = image.cloneNode();

    layer.className = 'album-portal-layer';
    backdrop.className = 'album-portal-backdrop';
    cover.className = 'album-portal-cover';
    cover.alt = '';
    cover.setAttribute('aria-hidden', 'true');
    Object.assign(cover.style, {
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      objectPosition: imageStyle.objectPosition,
      filter: imageStyle.filter,
    });
    layer.append(backdrop, cover);
    document.body.append(layer);
    document.documentElement.classList.add('album-portal-active');
    layerRef.current = layer;

    gsap.set(layer, { autoAlpha: 1 });
    gsap.set(backdrop, { autoAlpha: 0 });
    gsap.set(cover, { x: 0, y: 0, scale: 1, transformOrigin: '50% 50%' });
    timelineRef.current = gsap.timeline({
      onComplete: () => window.location.assign(item.href),
    })
      .to(backdrop, { autoAlpha: 1, duration: 0.5, ease: 'power2.out' }, 0)
      .to(shell, { autoAlpha: 0, duration: 0.48, ease: 'power2.inOut' }, 0.06)
      .to(cover, { x: target.x, y: target.y, scale: target.scale, duration: 0.74, ease: 'power3.inOut' }, 0)
      .to(cover, { autoAlpha: 0, scale: target.scale * 1.015, duration: 0.24, ease: 'power2.in' }, 0.64);
  });

  return (
    <InterestModule item={item} moduleRef={moduleRef} onClick={openAlbum}>
      <p className="interest-detail interest-detail--music">Liszt · Chopin · Rachmaninoff<br />Heifetz · Richter · Cziffra</p>
    </InterestModule>
  );
}
