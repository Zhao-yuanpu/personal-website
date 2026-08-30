import test from 'node:test';
import assert from 'node:assert/strict';
import { siteConfig } from '../src/config/siteConfig.js';

test('navigation contains the four approved sections', () => {
  assert.deepEqual(
    siteConfig.navigation.map(({ label, target }) => [label, target]),
    [
      ['首页', 'home'],
      ['经历', 'growth'],
      ['兴趣', 'interests'],
      ['联系', 'contact'],
    ],
  );
});

test('interest modules expose three distinct routes', () => {
  const routes = siteConfig.interests.map(({ href }) => href);
  assert.deepEqual(routes, [
    './专辑/index.html',
    '#/interests/sports',
    '#/interests/movies',
  ]);
  assert.equal(new Set(routes).size, 3);
});

test('contact details have one central replacement interface', () => {
  assert.deepEqual(Object.keys(siteConfig.contact).sort(), [
    'email',
    'phone',
    'wechatQrSrc',
  ]);
});
