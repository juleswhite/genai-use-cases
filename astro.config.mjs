// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://juleswhite.github.io',
  // Only use base path in production for GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/genai-use-cases' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});