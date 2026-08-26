import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const styles = () => readFile(new URL('../src/styles/site.css', import.meta.url), 'utf8');

test('keeps the hero on the approved plain charcoal background', async () => {
  const css = await styles();
  const hero = await readFile(new URL('../src/sections/HeroSection.jsx', import.meta.url), 'utf8');
  assert.match(css, /\.hero-section\s*\{[^}]*background:\s*var\(--ink\)/s);
  for (const layer of ['xian', 'campus', 'guangzhou']) {
    assert.match(hero, new RegExp(`['"]${layer}['"]`));
    assert.match(css, new RegExp(`\\.hero-city-layer--${layer}`));
  }
  assert.match(hero, /hero-city-panorama\.png/);
  assert.match(hero, /avatar\.png/);
  assert.doesNotMatch(hero, /<svg className="city-line-art"/);
});

test('hides every interest detail until hover or keyboard focus', async () => {
  const css = await styles();
  assert.match(css, /\.interest-detail\s*\{[^}]*opacity:\s*0[^}]*transform:\s*translateY\(12px\)[^}]*transition:/s);
  assert.doesNotMatch(css, /\.interest-detail--music,\s*\.interest-detail--movies/);
  assert.match(css, /\.interest-module:hover \.interest-detail,\s*\.interest-module:focus-visible \.interest-detail\s*\{[^}]*opacity:\s*1/s);
});
