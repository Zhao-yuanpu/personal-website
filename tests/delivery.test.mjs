import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';

test('index is a classic-script file entry with only relative runtime paths', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.doesNotMatch(html, /type=["']module["']/i);
  const scriptVersion = html.match(/<script defer src="\.\/assets\/app\.js\?v=([^"]+)"><\/script>/)?.[1];
  const styleVersion = html.match(/href="\.\/assets\/app\.css\?v=([^"]+)"/)?.[1];
  assert.ok(scriptVersion, 'app.js needs a cache-busting version');
  assert.equal(styleVersion, scriptVersion, 'CSS and JS should share the same version');
  assert.doesNotMatch(html, /(?:src|href)=["'](?:\.\.\/|[A-Za-z]:\\|\/)/);
});

test('delivery bundles exist and are non-empty', async () => {
  for (const path of ['../assets/app.js', '../assets/app.css', '../专辑/assets/app.js', '../专辑/assets/app.css']) {
    const info = await stat(new URL(path, import.meta.url));
    assert.ok(info.size > 1_000, `${path} is unexpectedly small`);
  }
});

test('album bundle keeps cover images as independently cacheable files', async () => {
  const js = await readFile(new URL('../专辑/assets/app.js', import.meta.url), 'utf8');
  assert.doesNotMatch(js, /data:image\/jpeg;base64,/);
  assert.match(js, /assets\/covers\/cover-01\.jpg/);
});
