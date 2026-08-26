import { build } from 'esbuild';

await build({
  entryPoints: ['src/main.jsx'],
  outdir: 'assets',
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
});
