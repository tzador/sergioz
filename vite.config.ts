import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import viteReact from '@vitejs/plugin-react'
import { languages, pictures } from './src/pictures'

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        // write /ua/01.html rather than /ua/01/index.html, so URLs have no trailing slash
        autoSubfolderIndex: false,
        // `/` only redirects to the default language (src/routes/index.tsx), so there is nothing to write
        filter: ({ path }) => path !== '/',
      },
      pages: languages.flatMap((lang) => [
        { path: `/${lang}` },
        ...pictures.map((picture) => ({ path: `/${lang}/${picture.id}` })),
      ]),
    }),
    viteReact(),
  ],
})
