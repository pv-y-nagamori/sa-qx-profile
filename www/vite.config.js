import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        host: true, // --hostオプションでも同じ設定が可能
        hmr: {
            host: 'localhost',
        },
    }, 
    plugins: [
        laravel({
            publicDirectory: 'html', // public(デフォルト) から htmlに変更
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
});