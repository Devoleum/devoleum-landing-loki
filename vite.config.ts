import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import mdx from '@mdx-js/rollup';
import { VitePWA } from 'vite-plugin-pwa';
import { IconsArray } from './icons';
export default defineConfig({
  plugins: [
    {
      ...mdx({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
      }),
      enforce: 'pre',
    },
    solid({ extensions: ['.md', '.mdx'] }),
    VitePWA({
      manifest: {
        name: 'Devoleum',
        short_name: 'Devoleum',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#A2BA24',
        display: 'standalone',
        orientation: 'portrait',
        icons: IconsArray,
      },
    }),
  ],
  optimizeDeps: {
    include: [],
  },
  build: {
    polyfillDynamicImport: false,
    target: 'esnext',
    terserOptions: {
      compress: {
        unsafe: true,
        unsafe_arrows: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_symbols: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        passes: 3,
      },
    },
  },
});
