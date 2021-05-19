import Fiber from 'fibers' // Sass-loderの処理速度を速くするために必要らしい
import Sass from 'sass'
export default {
  ssr: true,

  head: {
    title:
      'Reshelf【リシェルフ】| アップデートするオンライン学習マーケットプレイス',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Reshelfは、アップデートするオンライン学習マーケットプレイスです。学びたい受講者と、教えたい講師をオンラインでつなぐお手伝いをします。'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Reshelf' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://www.reshelf.jp/' },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'Reshelf【リシェルフ】| アップデートするオンライン学習マーケットプレイス'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Reshelfは、アップデートするオンライン学習マーケットプレイスです。学びたい受講者と、教えたい講師をオンラインでつなぐお手伝いをします。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/reshelf/image/upload/v1619870944/ogp_rzf3q1.png'
      },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['ress', { src: '@/assets/sass/app.scss', lang: 'scss' }],

  // パッケージ関係
  plugins: [
    { src: '~/plugins/vuesax.js', ssr: false },
    { src: '~/plugins/vuejs-paginate.js', ssr: false }
  ],

  components: true,

  loading: {
    color: '#33C4CC',
    height: '5px'
  },

  // ESlintとPrettierの設定
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],

  modules: ['@nuxtjs/axios'],

  // Sassの変数など
  styleResources: {
    scss: [
      '~/assets/sass/foundation/_variables.scss',
      '~/assets/sass/foundation/_mixin.scss'
    ]
  },

  // Laravelとの接続
  proxy: {
    '/api': 'http://localhost:80'
  },

  // Laravelとの非同期処理のため
  axios: {
    baseURL: '/',
    proxy: true
  },

  build: {
    cache: true,
    parallel: true,
    hardSource: true,

    // Sassの変換
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    },

    // 保存時にESlintの実行
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  // nuxt.jsのホットリロード
  watchers: {
    webpack: {
      poll: true
    }
  }
}
