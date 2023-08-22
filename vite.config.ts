import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
    plugins: [
        react(),
        // dts({
        //     // insertTypesEntry: true,
        //     // vite-plugin-dts'
        // }),
    ],
    build: {
        outDir: 'dist2',
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: 'design-system',
            formats: ['es', 'umd'],
            // fileName: (format) => `my-lib.${format}.js`,
        },
        // rollupOptions: {
        //     input: './index.ts',
        //     external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
        //     // output: {
        //     //     globals: {
        //     //         react: 'React',
        //     //         'react-dom': 'ReactDOM',
        //     //     },
        //     // },
        //     output: {
        //         dir: 'dist',
        //         // preserveModules: true,
        //         // banner: "'use client'",
        //     },
        // },
    },
});