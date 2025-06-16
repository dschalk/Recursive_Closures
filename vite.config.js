import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [sveltekit()],

  build: {
    sourcemap: true,
    minify: mode === 'production' ? 'terser' : false,  // <== tell Vite to use Terser explicitly
    terserOptions: {
      keep_classnames: true,
      keep_fnames: true
    }
  },

  esbuild: {
    keepNames: true
  }
}));
