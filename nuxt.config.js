// Sass-loderの処理速度を速くするために必要らしい
import Fiber from 'fibers'
import Sass from 'sass'
export default {
  head: {
    title: 'Reshelf| アップデートするオンライン学習マーケットプレイス',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Reshelfは、アップデートするオンライン学習マーケットプレイスです。学びたい受講者と、教えたい講師をオンラインでつなぐお手伝いをします。',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Reshelf' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://www.reshelf.jp/' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Reshelf | アップデートするオンライン学習マーケットプレイス',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Reshelfは、アップデートするオンライン学習マーケットプレイスです。学びたい受講者と、教えたい講師をオンラインでつなぐお手伝いをします。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/Reshelf/image/upload/v1619870944/ogp_rzf3q1.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [],
  },
  ssr: false, // SPA
  components: true,
  css: [
    'ress',
    { src: '@/assets/sass/app.scss', lang: 'scss' },
    'boxicons/css/boxicons.min.css',
    {
      src: '~/node_modules/highlight.js/styles/tomorrow-night-bright.css',
      lang: 'css',
    },
  ],

  styleResources: {
    scss: [
      '~/assets/sass/foundation/_variables.scss',
      '~/assets/sass/foundation/_mixin.scss',
    ],
  },

  // loading: {
  //   color: '#3173F7',
  //   height: '5px',
  // },
  loading: '~/components/atoms/Loading.vue',

  plugins: [
    '~/plugins/i18n.js',
    // '~/plugins/lodash.js',
    '@/plugins/vue-highlightjs',
  ],
  vendor: [
    'vue-i18n', // i18n
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    [
      'vue-social-auth/nuxt',
      {
        property: '$auth', // Optional property if the $auth property is being used by another module
        providers: {
          facebook: {
            clientId: '430942211752539',
            redirectUri: 'https://localhost/auth/facebook/callback', // Your client app URL
          },
        },
      },
    ],
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
  ],

  axios: {
    proxy: true,
    credentials: true,
  },

  proxy: {
    '/api': {
      target: 'http://localhost',
      changeOrigin: true,
    },
    '/sanctum': {
      target: 'http://localhost',
      changeOrigin: true,
    },
  },

  build: {
    cache: true,
    parallel: true,
    hardSource: true,
    standalone: true,
    // analyze: true,

    // Sass変換
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },

    // 保存時にESlintの実行
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  // generate: {
  //   // i18n
  //   routes: ['/', '/ja'],
  // }
}
