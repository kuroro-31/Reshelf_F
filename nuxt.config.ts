import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  components: {
    dirs: [
      '@/components/atoms',
      '@/components/atoms/item',
      '@/components/atoms/modal',
      '@/components/atoms/new',
      '@/components/layout',
      '@/components/header',
      '@/components/header/components',
      '@/components/header/components/carts',
      '@/components/sidebar',
      '@/components/sidebar/item',
    ],
  },
  
  css: [
    "@/assets/scss/tailwind.scss"
  ],
})
