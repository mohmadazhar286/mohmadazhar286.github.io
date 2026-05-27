import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(repoRoot, 'dist');
const rootAssets = join(repoRoot, 'assets');

await cp(join(distDir, 'index.html'), join(repoRoot, 'index.html'));
await mkdir(rootAssets, { recursive: true });

for (const entry of await readdir(rootAssets)) {
  if (/^index-.*\.(js|css)$/.test(entry)) {
    await rm(join(rootAssets, entry), { force: true });
  }
}

await cp(join(distDir, 'assets'), rootAssets, { recursive: true, force: true });
