import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    allowedHosts: true, // ✅ allow all hosts (or use ['alielbekov.dev'])
  },
  preview: {
    port: 3000, // ensure same port as your container
    allowedHosts: true, // ✅ allow all hosts during vite preview
  },
  plugins: [sveltekit(), tailwindcss()]
});
