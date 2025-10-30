import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	  server: {
    host: true,
    allowedHosts: ['https://alielbekov.dev', 'https://www.alielbekov.dev', 'http://localhost:3000']
  },
  preview: {
    allowedHosts: ['https://alielbekov.dev', 'https://www.alielbekov.dev', 'http://localhost:3000']
  },
	plugins: [tailwindcss(), sveltekit()]
});
