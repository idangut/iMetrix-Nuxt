
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    title: 'iMetrix - speech analytics',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      {
        hid: 'description', name: 'description', content: 'Somos una compañía de analítica y estrategia de datos; usamos la inteligencia artificial y big data para crear soluciones de valor para la empresas.',
        hid: 'keywords', name: 'keywords', content: 'Analítica de voz y texto, speech analytics, imetrix speech analytics, voice to text, voice analytics, text analytics, analítica de datos, estrategia en datos, AI, auditoria call center',
        name: 'keywords', name: 'keywords', content: 'Analítica de voz y texto, speech analytics, imetrix speech analytics, voice to text, voice analytics, text analytics, analítica de datos, estrategia en datos, AI, auditoria call center',
        content: 'Somos una compañía de analítica y estrategia de datos; usamos la inteligencia artificial y big data para crear soluciones de valor para la empresas.'
      },
      //-shrink-to-fit=no
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' }
    ],
    bodyAttrs: {
      class: 'sidebar-mini white-content'
    },
    script: [
      {
        //src: 'https://tableu2.imetrix.com.co/javascripts/api/tableau-2.min.js'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/black-dashboard.scss',
    '@/assets/css/nucleo-icons.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global',
    '~/plugins/vue2-filters',
    '~/plugins/vue-dummy',
    {
      src: '~/plugins/vue-infinite-loading', mode: 'client'
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    minify: {
      collapseWhitespace: false
    }
  }
}