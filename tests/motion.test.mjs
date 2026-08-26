import test from 'node:test';
import assert from 'node:assert/strict';
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
