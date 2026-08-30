import * as THREE from 'three';
import { gsap } from 'gsap';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const DESKTOP_TILT = 0.6;
const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
export const resolveCoverUrl = (src, scriptSrc) => {
  const runtimeScript = scriptSrc ?? [...document.scripts].find((script) => /\/assets\/app\.js(?:\?|$)/.test(script.src))?.src;
  return runtimeScript ? new URL(`../${src.replace(/^\.\//, '')}`, runtimeScript).href : new URL(src, document.baseURI).href;
};

export const clampAlbumIndex = (value, count) => clamp(Math.round(value), 0, count - 1);

export const syncCameraAspect = (camera, width, height) => {
  camera.aspect = width / Math.max(height, 1);
  camera.updateProjectionMatrix();
};

export const getCameraDistance = (mobile) => (mobile ? 10.6 : 9.2);

export const getAlbumPose = (offset, mobile = false) => {
  const distance = Math.abs(offset);
  const scale = clamp(1 - distance * 0.075, 0.76, 1);

  if (mobile) {
    return {
      x: 0,
      y: -offset * 1.34,
      z: 0.25 - distance * 0.56,
      rotationX: offset === 0 ? 0 : offset < 0 ? -0.82 : 0.82,
      rotationY: offset === 0 ? 0 : offset < 0 ? -0.12 : 0.12,
      rotationZ: offset * -0.015,
      scale,
    };
  }

  return {
    x: offset * 1.76,
    y: Math.sin(offset * 0.3) * -0.03,
    z: 0.18 - distance * 1.25,
    rotationX: offset < 0 ? 0.008 * Math.min(distance, 1) : offset * 0.008,
    rotationY: offset === 0 ? 0 : offset < 0
      ? DESKTOP_TILT * Math.min(distance, 1)
      : (Math.PI - DESKTOP_TILT) * Math.min(distance, 1),
    rotationZ: offset < 0 ? -0.012 * Math.min(distance, 1) : offset * -0.012,
    scale,
  };
};

const makeEtchTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const context = canvas.getContext('2d');
  context.fillStyle = '#878787';
  context.fillRect(0, 0, 256, 256);
  context.strokeStyle = 'rgba(255,255,255,.18)';
  context.lineWidth = 1;
  for (let radius = 7; radius < 190; radius += 8) {
    context.beginPath();
    context.arc(128, 128, radius, 0, Math.PI * 2);
    context.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  return texture;
};

const makeBackTexture = (item) => {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1024;
  const context = canvas.getContext('2d');
  context.fillStyle = '#181a1a';
  context.fillRect(0, 0, 1024, 1024);
  context.strokeStyle = 'rgba(191, 198, 190, .13)';
  context.lineWidth = 2;
  for (let radius = 28; radius < 520; radius += 28) {
    context.beginPath();
    context.arc(770, 290, radius, 0, Math.PI * 2);
    context.stroke();
  }
  context.fillStyle = '#d9ded8';
  context.font = '500 30px Avenir Next, Arial, sans-serif';
  context.fillText('ARCHIVE / 01', 76, 108);
  context.font = '600 54px Avenir Next, Arial, sans-serif';
  context.fillText(item.artist.toUpperCase(), 76, 182);
  context.font = '400 28px Avenir Next, Arial, sans-serif';
  context.fillStyle = '#a9b0aa';
  context.fillText(item.title, 76, 228);
  context.strokeStyle = '#d9ded8';
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(76, 272);
  context.lineTo(948, 272);
  context.stroke();
  context.font = '400 27px Avenir Next, Arial, sans-serif';
  item.tracks.forEach((track, index) => {
    const y = 346 + index * 76;
    context.fillStyle = '#777f79';
    context.fillText(String(index + 1).padStart(2, '0'), 78, y);
    context.fillStyle = '#c8cec8';
    context.fillText(track, 142, y);
  });
  context.fillStyle = '#747c76';
  context.font = '400 20px Avenir Next, Arial, sans-serif';
  context.fillText('ORIGINAL ALBUM SERIES  ·  APPLE MUSIC', 76, 932);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
};

export const createAlbumScene = ({ canvas, albums, covers = {}, startIndex = 3, onActiveChange, onOpen }) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

  scene.add(new THREE.HemisphereLight(0xc9d0c9, 0x0b0d0c, 1.8));
  const keyLight = new THREE.DirectionalLight(0xf2f4ee, 2.2);
  keyLight.position.set(-3, 5, 8);
  scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight(0x809485, 1.25);
  rimLight.position.set(5, 1, -4);
  scene.add(rimLight);

  const geometry = new THREE.BoxGeometry(2.7, 2.7, 0.055);
  const edgeMaterial = new THREE.MeshStandardMaterial({ color: 0x2f3432, roughness: 0.68, metalness: 0.12 });
  const etchTexture = makeEtchTexture();
  const textureLoader = new THREE.TextureLoader();
  if (window.location.protocol === 'file:') textureLoader.setCrossOrigin(undefined);
  const meshes = [];
  const materials = [];

  const loadCover = (src, material) => {
    textureLoader.load(src, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      material.map = texture;
      material.needsUpdate = true;
      render();
    });
  };

  albums.forEach((item) => {
    const front = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.86,
      metalness: 0.015,
      bumpMap: etchTexture,
      bumpScale: 0.012,
    });
    const back = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.9,
      metalness: 0.02,
      map: makeBackTexture(item),
      bumpMap: etchTexture,
      bumpScale: 0.01,
    });
    const mesh = new THREE.Mesh(geometry, [edgeMaterial, edgeMaterial, edgeMaterial, edgeMaterial, front, back]);
    mesh.userData.albumId = item.id;
    scene.add(mesh);
    meshes.push(mesh);
    materials.push(front, back);
    loadCover(covers[item.id] ?? resolveCoverUrl(item.coverSrc), front);
  });

  const state = { cursor: clamp(startIndex, 0, albums.length - 1), intro: 0, mobile: false };
  const hover = albums.map(() => ({ value: 0 }));
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let activeIndex = -1;
  let dragging = false;
  let pointerStart = null;
  let lastWheelAt = 0;
  let destroyed = false;

  const render = () => {
    if (destroyed) return;
    const nextActive = clampAlbumIndex(state.cursor, albums.length);
    if (nextActive !== activeIndex) {
      activeIndex = nextActive;
      onActiveChange?.(activeIndex);
    }
    meshes.forEach((mesh, index) => {
      const offset = index - state.cursor;
      const pose = getAlbumPose(offset, state.mobile);
      const visible = Math.abs(offset) < 4.35;
      mesh.visible = visible;
      if (!visible) return;
      const lift = hover[index].value * 0.12;
      mesh.position.set(pose.x, pose.y + lift, pose.z + lift - (1 - state.intro) * 1.3);
      mesh.rotation.set(pose.rotationX, pose.rotationY, pose.rotationZ);
      const scale = pose.scale + hover[index].value * 0.025;
      mesh.scale.setScalar(scale * (0.96 + state.intro * 0.04));
    });
    renderer.render(scene, camera);
  };

  const snap = (target) => {
    const destination = clampAlbumIndex(target, albums.length);
    gsap.killTweensOf(state);
    gsap.to(state, {
      cursor: destination,
      duration: reducedMotion() ? 0.12 : 0.58,
      ease: 'power3.out',
      onUpdate: render,
      onComplete: render,
    });
  };

  const moveBy = (amount) => snap(clampAlbumIndex(state.cursor, albums.length) + amount);
  const openCurrent = () => onOpen?.(albums[clampAlbumIndex(state.cursor, albums.length)]);

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    state.mobile = rect.width <= 760;
    syncCameraAspect(camera, rect.width, rect.height);
    camera.position.set(0, state.mobile ? 0 : 0.05, getCameraDistance(state.mobile));
    camera.lookAt(0, 0, 0);
    renderer.setSize(rect.width, rect.height, false);
    render();
  };

  const localPointer = (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  };

  const hitTest = (event) => {
    localPointer(event);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(meshes.filter((mesh) => mesh.visible), false)[0];
    return hit?.object ? albums.findIndex((item) => item.id === hit.object.userData.albumId) : -1;
  };

  const onPointerDown = (event) => {
    pointerStart = { x: event.clientX, y: event.clientY, cursor: state.cursor, time: performance.now() };
    dragging = false;
    canvas.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!pointerStart) return;
    const dx = event.clientX - pointerStart.x;
    const dy = event.clientY - pointerStart.y;
    const distance = Math.hypot(dx, dy);
    if (distance > 8) dragging = true;
    if (!dragging) return;
    const dragDistance = state.mobile ? Math.max(canvas.clientHeight * 0.27, 160) : Math.max(canvas.clientWidth * 0.2, 230);
    const delta = state.mobile ? -dy / dragDistance : -dx / dragDistance;
    state.cursor = clamp(pointerStart.cursor + delta, -0.35, albums.length - 0.65);
    render();
  };

  const onPointerUp = (event) => {
    if (!pointerStart) return;
    const elapsed = performance.now() - pointerStart.time;
    const wasDragging = dragging;
    pointerStart = null;
    dragging = false;
    if (wasDragging) snap(state.cursor);
    else if (elapsed < 550) {
      const hitIndex = hitTest(event);
      if (hitIndex >= 0) onOpen?.(albums[hitIndex]);
    }
  };

  const onPointerCancel = () => {
    pointerStart = null;
    dragging = false;
    snap(state.cursor);
  };

  const onWheel = (event) => {
    if (state.mobile || performance.now() - lastWheelAt < 320) return;
    event.preventDefault();
    lastWheelAt = performance.now();
    moveBy(event.deltaY > 0 ? 1 : -1);
  };

  const onPointerOver = (event) => {
    const index = hitTest(event);
    if (index < 0) return;
    gsap.to(hover[index], { value: 1, duration: 0.2, onUpdate: render });
  };

  const onPointerOut = () => {
    hover.forEach((_, index) => gsap.to(hover[index], { value: 0, duration: 0.2, onUpdate: render }));
  };

  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerCancel);
  canvas.addEventListener('wheel', onWheel, { passive: false });
  canvas.addEventListener('pointerover', onPointerOver);
  canvas.addEventListener('pointerout', onPointerOut);
  window.addEventListener('resize', resize);

  resize();
  gsap.to(state, {
    intro: 1,
    duration: reducedMotion() ? 0.12 : 0.9,
    ease: 'power3.out',
    onUpdate: render,
  });

  return {
    moveBy,
    openCurrent,
    destroy: () => {
      destroyed = true;
      gsap.killTweensOf(state);
      hover.forEach((value) => gsap.killTweensOf(value));
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerCancel);
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('pointerover', onPointerOver);
      canvas.removeEventListener('pointerout', onPointerOut);
      window.removeEventListener('resize', resize);
      geometry.dispose();
      etchTexture.dispose();
      materials.forEach((material) => {
        material.map?.dispose();
        material.dispose();
      });
      edgeMaterial.dispose();
      renderer.dispose();
    },
  };
};
