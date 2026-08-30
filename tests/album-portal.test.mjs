import test from 'node:test';
import assert from 'node:assert/strict';

const loadPortal = async () => import('../src/interests/albumPortal.js').catch((error) => {
  if (error.code === 'ERR_MODULE_NOT_FOUND') return {};
  throw error;
});

test('album portal expands the music card to cover the viewport', async () => {
  const { getAlbumPortalTransform } = await loadPortal();
  assert.equal(typeof getAlbumPortalTransform, 'function');
  assert.deepEqual(
    getAlbumPortalTransform(
      { left: 100, top: 50, width: 300, height: 400 },
      { width: 1200, height: 800 },
    ),
    { x: 350, y: 150, scale: 4 },
  );
});

test('album portal preserves native navigation when animation is inappropriate', async () => {
  const { shouldAnimateAlbumPortal } = await loadPortal();
  assert.equal(typeof shouldAnimateAlbumPortal, 'function');
  const plainClick = { button: 0, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false };
  assert.equal(shouldAnimateAlbumPortal(plainClick, false), true);
  assert.equal(shouldAnimateAlbumPortal(plainClick, true), false);
  assert.equal(shouldAnimateAlbumPortal({ ...plainClick, ctrlKey: true }, false), false);
  assert.equal(shouldAnimateAlbumPortal({ ...plainClick, button: 1 }, false), false);
});
