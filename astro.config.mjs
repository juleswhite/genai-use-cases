// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://juleswhite.github.io',
  base: '/majk_gen_ai_use_cases_7a6844db',
  vite: {
    plugins: [tailwindcss()]
  }
});