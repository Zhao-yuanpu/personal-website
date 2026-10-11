import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';

const readDist = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');
const distFiles = (dir) => readdir(new URL(`../dist/${dir}`, import.meta.url));

test('dist html uses hashed module bundles with only relative runtime paths', async () => {
  for (const page of ['index.html', '专辑/index.html']) {
    const html = await readDist(page);
    assert.match(html, /type="module"/, `${page} should load the bundle as an ES module`);
    assert.match(html, /\.\/assets\/app-[\w-]+\.js/, `${page} should reference a hashed bundle`);
    assert.match(html, /\.\/assets\/app-[\w-]+\.css/, `${page} should reference a hashed stylesheet`);
    assert.doesNotMatch(html, /(?:src|href)=["'](?:\.\.\/|[A-Za-z]:\\|\/)/);
  }
});

test('main page preloads hero imagery and ships a static skeleton', async () => {
  const html = await readDist('index.html');
  assert.match(html, /rel="preload" as="image" href="\.\/assets\/images\/hero-city-panorama\.webp"/);
  assert.match(html, /rel="preload" as="image" href="\.\/assets\/images\/avatar\.webp"/);
  assert.match(html, /id="app" class="boot"/);
  assert.match(html, /从西安出发，/);
});

test('delivery bundles exist and are non-empty', async () => {
  const mainDir = await distFiles('assets');
  const albumDir = await distFiles('专辑/assets');
  for (const [dir, files] of [['assets', mainDir], ['专辑/assets', albumDir]]) {
    for (const ext of ['.js', '.css']) {
      const name = files.find((file) => file.startsWith('app-') && file.endsWith(ext));
      assert.ok(name, `${dir} is missing a hashed ${ext} bundle`);
      const info = await stat(new URL(`../dist/${dir}/${name}`, import.meta.url));
      assert.ok(info.size > 1_000, `${name} is unexpectedly small`);
    }
  }
});

test('heavy libraries are split out of the entry bundles', async () => {
  const albumDir = await distFiles('专辑/assets/chunks');
  assert.ok(albumDir.length > 0, 'album page should emit lazy chunks for three.js');
  const albumEntryName = (await distFiles('专辑/assets')).find((file) => file.startsWith('app-') && file.endsWith('.js'));
  const albumEntry = await readDist(`专辑/assets/${albumEntryName}`);
  assert.ok(albumEntry.length < 300_000, 'album entry should stay small; three.js loads lazily');
});

test('album bundle keeps cover images as independently cacheable files', async () => {
  const albumDir = await distFiles('专辑/assets');
  const entry = albumDir.find((file) => file.startsWith('app-') && file.endsWith('.js'));
  const js = await readDist(`专辑/assets/${entry}`);
  assert.doesNotMatch(js, /data:image\/jpeg;base64,/);
  assert.match(js, /assets\/covers\/cover-01\.webp/);
});

test('only optimized webp images are deployed', async () => {
  const images = await distFiles('assets/images');
  assert.ok(images.length > 0);
  assert.ok(images.every((file) => file.endsWith('.webp')), 'no PNG/JPG originals in dist');
  const covers = await distFiles('专辑/assets/covers');
  assert.equal(covers.length, 12);
  assert.ok(covers.every((file) => file.endsWith('.webp')));
});
