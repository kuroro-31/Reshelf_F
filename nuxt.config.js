import webpack from 'webpack'
// import i18n from './nuxt-i18n.config'
require('dotenv').config()
const { ROOT_URL } = process.env
export default {
  mode: 'universal',
  ssr: true,
  components: true,

  env: {
    ROOT_URL,
  },
  head: {
    title: '',
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
          'Reshelfは、講師が成果物を作って学ぶチュートリアルを販売し、購入した受講生がプログラミングのレパートリーを増やしていくことを目的としたマーケットプレイスです。',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Reshelf' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://www.reshelf.jp/' },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'Reshelf | プログラミングのレパートリーを増やすマーケットプレイス',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Reshelfは、講師が成果物を作って学ぶチュートリアルを販売し、購入した受講生がプログラミングのレパートリーを増やしていくことを目的としたマーケットプレイスです。',
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

  loading: {
    color: '#3f85fc',
    height: '5px',
  },
  // loading: '~/components/atoms/Loading.vue',

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: '404error',
        path: '*',
        component: resolve('@/pages/error/404.vue'),
      })
      routes.push({
        name: '500error',
        path: '*',
        component: resolve('@/pages/error/500.vue'),
      })
    },
  },

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

  plugins: [
    '@/plugins/vue-highlightjs',
    { src: '@/plugins/persistedstate.js', mode: 'client' },
    { src: '@/plugins/vuelidate.js', mode: 'client' },
    // mixins
    '@/plugins/mixins/validation.js',
    // util
    '@/plugins/util/comma.js',
    '@/plugins/util/moneyFormat.js',
    '@/plugins/util/numberFormat.js',
  ],

  proxy: {
    '/api': {
      target: process.env.ROOT_URL,
      changeOrigin: true,
    },
    '/sanctum': {
      target: process.env.ROOT_URL,
      changeOrigin: true,
    },
  },

  build: {
    vendor: ['lodash'],

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
    cache: true,
    parallel: true,
    hardSource: true,
    standalone: true,
    // analyze: true,

    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
    ],
  },

  ngrok: {
    authtoken: process.env.NGROK_AUTHTOKEN,
    addr: 3000,
    region: 'jp',
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    // '@nuxtjs/color-mode',
    '@nuxtjs/ngrok',
  ],
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'nuxt-client-init-module',
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.js',
          },
          {
            code: 'ja',
            file: 'ja.js',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'ja', // デフォルトの言語
        strategy: 'prefix_and_default', // URLに言語のプレフィックスを追加するかの指定
        vueI18n: {
          // 翻訳ファイルが見つからなかった場合の言語を指定
          fallbackLocale: 'ja',
        },
        vueI18nLoader: true,
        lazy: true, // 遅延読み込みの有効化
      },
    ],
  ],
  axios: {
    proxy: true,
    credentials: true,
  },
}
