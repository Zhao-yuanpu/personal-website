import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';

test('index is a classic-script file entry with only relative runtime paths', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.doesNotMatch(html, /type=["']module["']/i);
  assert.match(html, /<script defer src="\.\/assets\/app\.js"><\/script>/);
  assert.match(html, /href="\.\/assets\/app\.css"/);
  assert.doesNotMatch(html, /(?:src|href)=["'](?:\.\.\/|[A-Za-z]:\\|\/)/);
});

test('delivery bundles exist and are non-empty', async () => {
  for (const path of ['../assets/app.js', '../assets/app.css']) {
    const info = await stat(new URL(path, import.meta.url));
    assert.ok(info.size > 1_000, `${path} is unexpectedly small`);
  }
});
