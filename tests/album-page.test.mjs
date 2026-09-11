import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as THREE from 'three';
import { albums, } from '../专辑/src/albums.js';
import * as albumScene from '../专辑/src/albumScene.js';

const { clampAlbumIndex, getAlbumPose, getCameraDistance, getAlbumSnapTarget, resolveCoverUrl } = albumScene;

test('album page stays a static Apple Music handoff', async () => {
  const html = await readFile(new URL('../专辑/index.html', import.meta.url), 'utf8');
  assert.match(html, /古典乐/);
  assert.match(html, /\.\/assets\/app\.js/);
  assert.match(html, /\.\/assets\/app\.css/);
  assert.doesNotMatch(html, /player|audio/i);
});

test('album data has local covers and official Apple Music destinations', () => {
  const expectedAlbumIds = [
    '1452171951', '1440779332', '715385413', '479082366',
    '1705084833', '1720950253', '1719321513', '458436919',
    '946039986', '1452336583', '691349969', '903181458',
  ];
  assert.equal(albums.length, 12);
  assert.equal(new Set(albums.map(({ id }) => id)).size, albums.length);
  assert.equal(
    albums[1].appleMusicUrl,
    'https://music.apple.com/cn/album/transcendental-liszt-%C3%A9tudes/1440779332',
  );
  albums.forEach((item, index) => {
    assert.match(item.coverSrc, /^\.\/assets\/covers\/cover-\d+\.jpg$/);
    assert.match(item.appleMusicUrl, /^https:\/\/music\.apple\.com\/cn\/album\//);
    assert.equal(new URL(item.appleMusicUrl).pathname.split('/').at(-1), expectedAlbumIds[index]);
    assert.doesNotMatch(item.appleMusicUrl, /\/search(?:\?|\/)/);
    assert.ok(item.tracks.length >= 4);
  });
});

test('cover URLs resolve from the album bundle instead of the document route', () => {
  assert.equal(
    resolveCoverUrl('./assets/covers/cover-01.jpg', 'https://example.test/专辑/assets/app.js?v=2'),
    new URL('../assets/covers/cover-01.jpg', 'https://example.test/专辑/assets/app.js?v=2').href,
  );
});

test('album poses preserve a front-left/back-right desktop fan and mobile stack', () => {
  assert.equal(getAlbumPose(0).rotationY, 0);
  assert.ok(getAlbumPose(-1).rotationY > 0);
  assert.ok(getAlbumPose(1).rotationY > Math.PI / 2);
  assert.ok(getAlbumPose(0.01).rotationY < getAlbumPose(1).rotationY);
  assert.ok(Math.abs(getAlbumPose(0, true).y) < 1e-9);
  assert.ok(getAlbumPose(-1, true).y > getAlbumPose(1, true).y);
  assert.equal(clampAlbumIndex(-2, albums.length), 0);
  assert.equal(clampAlbumIndex(99, albums.length), albums.length - 1);
});

test('album snapping tolerates small drags and uses release velocity', () => {
  const snap = (cursor, velocity = 0) => getAlbumSnapTarget({ start: 3, cursor, velocity, count: 12 });
  assert.equal(snap(3.05), 3);
  assert.equal(snap(3.35), 4);
  assert.equal(snap(3.85), 4);
  assert.equal(snap(3.12, 3), 4);
  assert.equal(snap(2.88, -3), 2);
  assert.equal(getAlbumSnapTarget({ start: 0, cursor: -0.2, velocity: -3, count: 12 }), 0);
  assert.equal(getAlbumSnapTarget({ start: 11, cursor: 11.2, velocity: 3, count: 12 }), 11);
});

test('mobile album neighbors keep enough vertical clearance to avoid cover intersection', () => {
  assert.ok(Math.abs(getAlbumPose(-1, true).y) >= 2.4);
  assert.ok(Math.abs(getAlbumPose(-1, true).rotationX) >= 1);
});

test('mobile album tilt eases continuously into the center position', () => {
  const left = getAlbumPose(-0.01, true);
  const right = getAlbumPose(0.01, true);
  assert.ok(Math.abs(left.rotationX) < 0.02);
  assert.ok(Math.abs(right.rotationX) < 0.02);
  assert.ok(Math.abs(left.rotationY) < 0.01);
  assert.ok(Math.abs(right.rotationY) < 0.01);
});

test('desktop fan keeps the left and right perspectives independent', () => {
  const left = getAlbumPose(-1);
  const right = getAlbumPose(1);
  assert.ok(Math.abs(left.rotationY - 0.6) < 1e-9);
  assert.ok(Math.abs(right.rotationY - (Math.PI - 0.6)) < 1e-9);
  assert.equal(left.rotationX, right.rotationX);
  assert.equal(left.rotationZ, right.rotationZ);
  assert.ok(getCameraDistance(false) < 10);
});

test('desktop right side keeps its progressive outer-card roll', () => {
  const nearRight = getAlbumPose(1);
  const farRight = getAlbumPose(3);
  assert.ok(farRight.rotationX > nearRight.rotationX);
  assert.ok(farRight.rotationZ < nearRight.rotationZ);
});

test('center album stays in front of both desktop neighbors', () => {
  const nearestZ = (pose) => pose.z
    + Math.abs(Math.sin(pose.rotationY)) * 1.35
    + Math.abs(Math.cos(pose.rotationY)) * 0.0275;
  const center = nearestZ(getAlbumPose(0));
  assert.ok(center > nearestZ(getAlbumPose(-1)));
  assert.ok(center > nearestZ(getAlbumPose(1)));
});

test('camera resize updates its projection matrix to preserve square albums', () => {
  assert.equal(typeof albumScene.syncCameraAspect, 'function');
  const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
  const before = camera.projectionMatrix.elements.slice();
  albumScene.syncCameraAspect(camera, 1280, 502);
  assert.equal(camera.aspect, 1280 / 502);
  assert.notDeepEqual(camera.projectionMatrix.elements, before);
});
