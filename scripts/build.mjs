import { build } from 'esbuild';

const shared = {
  entryNames: 'app',
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['es2020'],
  jsx: 'automatic',
  minify: true,
  legalComments: 'none',
  sourcemap: false,
  logLevel: 'info',
};

await Promise.all([
  build({ ...shared, entryPoints: ['src/main.jsx'], outdir: 'assets' }),
  build({ ...shared, entryPoints: ['专辑/src/main.jsx'], outdir: '专辑/assets' }),
]);
