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
  assert.match(hero, /hero-city-panorama\.webp/);
  assert.match(hero, /avatar\.webp/);
  assert.doesNotMatch(hero, /<svg className="city-line-art"/);
});

test('hides every interest detail until hover or keyboard focus', async () => {
  const css = await styles();
  assert.match(css, /\.interest-detail\s*\{[^}]*opacity:\s*0[^}]*transform:\s*translateY\(12px\)[^}]*transition:/s);
  assert.doesNotMatch(css, /\.interest-detail--music,\s*\.interest-detail--movies/);
  assert.match(css, /\.interest-module:hover \.interest-detail,\s*\.interest-module:focus-visible \.interest-detail\s*\{[^}]*opacity:\s*1/s);
});

test('keeps keyboard focus visible on global links', async () => {
  const css = await styles();
  assert.match(css, /\.site-header nav a:focus-visible,[^\{]+\{[^}]*outline:/s);
  assert.match(css, /\.contact-channels a:focus-visible[^\{]*\{[^}]*outline:/s);
});

test('reveals interest details on touch layouts without hover', async () => {
  const css = await styles();
  assert.match(css, /@media \(hover: none\) and \(pointer: coarse\)\s*\{[\s\S]*\.interest-detail\s*\{[^}]*opacity:\s*1[^}]*transform:\s*none/s);
});

test('adds a pressed state to interactive interest modules', async () => {
  const css = await styles();
  assert.match(css, /\.interest-module:active\s*\{[^}]*transform:[^}]*scale\(/s);
});

test('uses a characterful sans stack and balanced display headings', async () => {
  const css = await styles();
  assert.doesNotMatch(css, /--sans:\s*Inter\b/);
  assert.match(css, /h1, h2, h3\s*\{[^}]*text-wrap:\s*balance/s);
});

test('adds interpolated feedback to contact channels and the scroll cue', async () => {
  const css = await styles();
  assert.match(css, /\.contact-channels a\s*\{[^}]*transition:[^;]*cubic-bezier/s);
  assert.match(css, /\.contact-channels a:hover[^\{]*\{[^}]*transform:\s*translateY\(-3px\)/s);
  assert.match(css, /\.scroll-cue\s*\{[^}]*transition:[^;]*cubic-bezier/s);
});
