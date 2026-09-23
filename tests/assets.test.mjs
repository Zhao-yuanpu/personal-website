import test from 'node:test';
import assert from 'node:assert/strict';
import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const asset = (name) => fileURLToPath(new URL(`../assets/images/${name}`, import.meta.url));

const requiredAssets = [
  'avatar.png',
  'amc-certificate.jpg',
  'ai-advanced-certificate.png',
  'ximalaya-data.jpg',
  'library-front-lineart.png',
  'interest-music.png',
  'interest-running.png',
  'interest-movies.png',
  'hero-city-panorama.png',
];

const optimizedAssets = [
  'hero-city-panorama.webp',
  'avatar.webp',
  'interest-music.webp',
  'interest-running.webp',
  'interest-movies.webp',
  'amc-certificate.webp',
  'ai-advanced-certificate.webp',
  'library-front-lineart.webp',
];

const removedAssets = ['wechat-qr.png', 'wechat-qr.webp'];

test('all runtime image assets are self-contained and non-empty', async () => {
  for (const name of requiredAssets) {
    const info = await stat(asset(name));
    assert.ok(info.size > 20_000, `${name} is unexpectedly small`);
  }
});

test('the advanced certificate is a website derivative, not the original file', async () => {
  const websiteCopy = await stat(asset('ai-advanced-certificate.png'));
  const original = await stat(
    fileURLToPath(new URL('../../证书/人工智能训练师（高级）-20260823.jpg', import.meta.url)),
  );
  assert.notEqual(websiteCopy.size, original.size);
});

test('optimized runtime images are present and smaller than their source files', async () => {
  for (const name of optimizedAssets) {
    const optimized = await stat(asset(name));
    const source = await stat(asset(name.replace(/\.webp$/, name.includes('amc') ? '.jpg' : '.png')));
    assert.ok(optimized.size > 10_000, `${name} is unexpectedly small`);
    assert.ok(optimized.size < source.size, `${name} should be smaller than its source`);
  }
});

test('the removed WeChat QR assets are no longer shipped', async () => {
  for (const name of removedAssets) {
    await assert.rejects(stat(asset(name)), { code: 'ENOENT' });
  }
});
