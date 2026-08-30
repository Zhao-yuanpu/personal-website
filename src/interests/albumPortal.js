export const getAlbumPortalTransform = (rect, viewport) => ({
  x: viewport.width / 2 - (rect.left + rect.width / 2),
  y: viewport.height / 2 - (rect.top + rect.height / 2),
  scale: Math.max(viewport.width / rect.width, viewport.height / rect.height),
});

export const shouldAnimateAlbumPortal = (event, reducedMotion) => !reducedMotion
  && event.button === 0
  && !event.altKey
  && !event.ctrlKey
  && !event.metaKey
  && !event.shiftKey;
