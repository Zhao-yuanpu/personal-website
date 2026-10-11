import { build } from 'esbuild';
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIST = 'dist';

const shared = {
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: ['es2020'],
  jsx: 'automatic',
  minify: true,
  legalComments: 'none',
  sourcemap: false,
  logLevel: 'info',
  splitting: true,
  entryNames: '[name]-[hash]',
  chunkNames: 'chunks/[name]-[hash]',
};

const findBuilt = async (dir, ext) => {
  const files = await readdir(dir);
  const match = files.find((file) => file.startsWith('app-') && file.endsWith(ext));
  if (!match) throw new Error(`built app-*.${ext} not found in ${dir}`);
  return match;
};

await rm(DIST, { recursive: true, force: true });

await Promise.all([
  build({ ...shared, entryPoints: { app: 'src/main.jsx' }, outdir: `${DIST}/assets` }),
  build({ ...shared, entryPoints: { app: '专辑/src/main.jsx' }, outdir: `${DIST}/专辑/assets` }),
]);

// 仅复制运行时需要的优化图片；PNG/JPG 原件不进部署目录
await mkdir(`${DIST}/assets/images`, { recursive: true });
for (const file of await readdir('assets/images')) {
  if (file.endsWith('.webp')) {
    await cp(path.join('assets/images', file), path.join(`${DIST}/assets/images`, file));
  }
}
await cp('专辑/assets/covers-webp', `${DIST}/专辑/assets/covers`, { recursive: true });

// 用带指纹的真实文件名生成部署版 HTML
const [mainJs, mainCss, albumJs, albumCss] = await Promise.all([
  findBuilt(`${DIST}/assets`, '.js'),
  findBuilt(`${DIST}/assets`, '.css'),
  findBuilt(`${DIST}/专辑/assets`, '.js'),
  findBuilt(`${DIST}/专辑/assets`, '.css'),
]);

const mainHtml = (await readFile('index.html', 'utf8'))
  .replace('./assets/app.css', `./assets/${mainCss}`)
  .replace('./assets/app.js', `./assets/${mainJs}`);
await writeFile(`${DIST}/index.html`, mainHtml);

const albumHtml = (await readFile('专辑/index.html', 'utf8'))
  .replace('./assets/app.css', `./assets/${albumCss}`)
  .replace('./assets/app.js', `./assets/${albumJs}`);
await writeFile(`${DIST}/专辑/index.html`, albumHtml);

console.log(`dist ready: main=${mainJs} album=${albumJs}`);
