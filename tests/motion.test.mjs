import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { getSliceRanges, getMotionMode } from '../src/motion/buildingSlices.js';
import { transitionOrder } from '../src/motion/transitionOrder.js';

test('building assembly creates adjacent percentage slices', () => {
  assert.deepEqual(getSliceRanges(4), [
    ['0%', '25%'],
    ['25%', '50%'],
    ['50%', '75%'],
    ['75%', '100%'],
  ]);
});

test('reduced motion disables spatial assembly', () => {
  assert.equal(getMotionMode(true), 'reduced');
  assert.equal(getMotionMode(false), 'full');
});

test('global transition order links every adjacent section', () => {
  assert.deepEqual(transitionOrder, [
    ['home', 'growth'],
    ['growth', 'interests'],
    ['interests', 'contact'],
  ]);
});

test('section accents use transform-safe motion hooks', async () => {
  const source = await readFile(new URL('../src/motion/MotionDirector.jsx', import.meta.url), 'utf8');
  assert.match(source, /\.add\('\.hero-route, \.city-label, \.hero-direction, \.scroll-cue'[\s\S]*?y:\s*\[8, 0\]/);
  assert.match(source, /animate\('\.contact-axis'[\s\S]*?scale:\s*\[(?:0\.)?8, 1\]/);
});

test('section observer ignores duplicate entries and records scroll direction', async () => {
  const source = await readFile(new URL('../src/motion/MotionDirector.jsx', import.meta.url), 'utf8');
  assert.match(source, /const activeSection = useRef\('home'\)/);
  assert.match(source, /if \(activeSection\.current === name\) return;/);
  assert.match(source, /dataset\.scrollDirection/);
});
