// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/RITMICA',
  outDir: 'apps/abbott/RITMICA',
  vite: {
    plugins: [tailwindcss()]
  }
});