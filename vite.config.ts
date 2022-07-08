import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

const pageData = {
  '/index.html': {
    title: `Shack Donald's`,
  },
  '/about/index.html': {
    title: `Shack Donald's | О нас`,
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
      },
    },
  },
  plugins: [
    handlebars({
      context(pagePath) {
        return pageData[pagePath]
      },
    }),
  ],
})
