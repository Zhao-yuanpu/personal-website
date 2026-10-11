import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 极简静态服务器：npm run dev -- --port 7100 --host 127.0.0.1
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const args = process.argv.slice(2);
const argValue = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const port = Number(argValue('--port', 7100));
const host = argValue('--host', '127.0.0.1');

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
};

createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (urlPath.endsWith('/')) urlPath += 'index.html';
    const file = path.join(root, urlPath);
    if (!file.startsWith(root)) throw new Error('forbidden');
    const info = await stat(file);
    if (info.isDirectory()) {
      res.writeHead(301, { location: `${urlPath}/` });
      return res.end();
    }
    const body = await readFile(file);
    const hashed = /app-[\w-]{8}\.|chunks\//.test(urlPath);
    res.writeHead(200, {
      'content-type': types[path.extname(file)] ?? 'application/octet-stream',
      'cache-control': hashed ? 'public, max-age=31536000, immutable' : 'no-cache',
    });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end('not found');
  }
}).listen(port, host, () => console.log(`serving dist at http://${host}:${port}/`));
