import test from 'node:test';
import assert from 'node:assert/strict';
import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const asset = (name) => fileURLToPath(new URL(`../assets/images/${name}`, import.meta.url));

const requiredAssets = [
  'avatar.png',
  'wechat-qr.png',
  'amc-certificate.jpg',
  'ai-advanced-certificate.png',
  'ximalaya-data.jpg',
  'library-front-lineart.png',
  'interest-music.png',
  'interest-running.png',
  'interest-movies.png',
  'hero-city-panorama.png',
];

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
