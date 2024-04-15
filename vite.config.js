import { resolve } from 'path'
import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                autoprefixer(),
            ],
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                zh: resolve(__dirname, 'zh/index.html'),
                en: resolve(__dirname, 'en/index.html'),
            },
        },
    },
});