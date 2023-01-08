import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import devtools from 'solid-devtools/vite';

export default defineConfig({
    plugins: [
        devtools({
            autoname: true,
        }),
        {
            ...(await import('@mdx-js/rollup')).default({
                jsx: true,
                jsxImportSource: 'solid-js',
                providerImportSource: 'solid-mdx',
            }),
            enforce: 'pre',
        },
        solid({
            extensions: ['.mdx', '.md'],
        }),
    ],
});
