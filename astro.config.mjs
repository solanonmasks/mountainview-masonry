// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: set this to the real domain once it's known (e.g. 'https://example.ca').
  // It's used to build full links for social-share previews.
  // site: 'https://example.ca',
  vite: {
    plugins: [tailwindcss()],
  },
});
