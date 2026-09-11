import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { albums } from './albums.js';
import { coverData } from './covers.js';
import { createAlbumScene } from './albumScene.js';

gsap.registerPlugin(useGSAP);

export function AlbumPage() {
  const pageRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(3);
  const active = albums[activeIndex];

  useGSAP(() => {
    gsap.fromTo('.album-ui', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.35 });
  }, { scope: pageRef });

  useEffect(() => {
    sceneRef.current = createAlbumScene({
      canvas: canvasRef.current,
      albums,
      covers: coverData,
      startIndex: 3,
      onActiveChange: setActiveIndex,
      onOpen: (album) => window.location.assign(album.appleMusicUrl),
    });
    return () => sceneRef.current?.destroy();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      sceneRef.current?.moveBy(-1);
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      sceneRef.current?.moveBy(1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      sceneRef.current?.moveTo(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      sceneRef.current?.moveTo(albums.length - 1);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      sceneRef.current?.openCurrent();
    }
  };

  return (
    <main ref={pageRef} className="album-page" onKeyDown={handleKeyDown} tabIndex={0} aria-label="古典乐专辑档案">
      <header className="album-ui album-header">
        <a className="album-back" href="../index.html#interests" aria-label="返回兴趣区">↖ <span>返回兴趣</span></a>
        <p className="album-kicker">CLASSICAL ARCHIVE</p>
        <p className="album-count" aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} / {String(albums.length).padStart(2, '0')}</p>
      </header>

      <section className="album-stage" aria-label="专辑封面画廊">
        <canvas ref={canvasRef} aria-label="拖动浏览专辑，点击专辑前往 Apple Music" />
        <div className="album-guide album-ui" aria-hidden="true">DRAG TO EXPLORE <span>↔</span></div>
      </section>

      <footer className="album-ui album-footer">
        <div>
          <p className="album-meta-label">NOW IN VIEW</p>
          <h1>{active.title}</h1>
          <p>{active.artist}</p>
        </div>
        <a className="apple-link" href={active.appleMusicUrl}>在 Apple Music 中打开 <span>↗</span></a>
      </footer>

      <ul className="sr-only" aria-label="专辑列表">
        {albums.map((item) => <li key={item.id}><a href={item.appleMusicUrl}>{item.title} · {item.artist}</a></li>)}
      </ul>
    </main>
  );
}
