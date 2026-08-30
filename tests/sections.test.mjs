import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = async () => Promise.all([
  'App.jsx',
  'components/Header.jsx',
  'sections/HeroSection.jsx',
  'sections/GrowthSection.jsx',
  'sections/InterestsSection.jsx',
  'sections/ContactSection.jsx',
  'config/siteConfig.js',
].map((path) => readFile(new URL(`../src/${path}`, import.meta.url), 'utf8')))
  .then((parts) => parts.join('\n'));

test('renders the four linked main sections and approved navigation', async () => {
  const html = await source();
  for (const id of ['home', 'growth', 'interests', 'contact']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.doesNotMatch(html, />关于</);
});

test('renders the approved interests title and independent module routes', async () => {
  const html = await source();
  assert.match(html, /我的生活，不止一种节奏。/);
  for (const moduleName of ['MusicModule', 'SportsModule', 'MoviesModule']) {
    assert.match(html, new RegExp(moduleName));
  }
  for (const route of [
    './专辑/index.html',
    '#/interests/sports',
    '#/interests/movies',
  ]) {
    assert.match(html, new RegExp(route.replaceAll('/', '\\/')));
  }
});

test('renders contact details from the shared configuration', async () => {
  const html = await source();
  assert.match(html, /\+86 1XX XXXX XXXX/);
  assert.match(html, /name@example\.com/);
  assert.match(html, /wechat-qr\.png/);
});

test('only the growth section contains a drawable timeline path', async () => {
  const html = await source();
  const drawableCount = (html.match(/data-drawable="timeline"/g) ?? []).length;
  assert.equal(drawableCount, 1);
});
