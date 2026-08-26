export function getSliceRanges(count) {
  const step = 100 / count;
  return Array.from({ length: count }, (_, index) => [
    `${index * step}%`,
    `${(index + 1) * step}%`,
  ]);
}

export function getMotionMode(reducedMotion) {
  return reducedMotion ? 'reduced' : 'full';
}
