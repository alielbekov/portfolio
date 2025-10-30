import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    allowedHosts: true,
  },
  preview: {
    port: 3000,
    allowedHosts: true,
  },
  plugins: [sveltekit(), tailwindcss()]
});
