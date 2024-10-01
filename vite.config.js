import react from '@vitejs/plugin-react';
import { createRequire } from 'node:module';
import { defineConfig, normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const require = createRequire(import.meta.url);

const pdfjsDistPath = new URL('node_modules/pdfjs-dist', import.meta.url).href;
const cMapsDir = normalizePath(`${pdfjsDistPath}/cmaps`);

export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [{ src: cMapsDir, dest: '' }],
        }),
    ],
});