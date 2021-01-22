export default {
  telemetry: false,
  target: 'static',

  head: {
    title: 'Direnc.net',
    htmlAttrs: {
      lang: 'tr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap',
      },
    ],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [
    [
      'nuxt-buefy',
      {
        css: true,
      },
    ],
    '@nuxtjs/axios',
  ],

  axios: {},
  build: {},
}
