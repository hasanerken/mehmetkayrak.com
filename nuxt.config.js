
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'bg3aGgpqSdRtrfIaE05GEMq9O--1i8pCiCLdiEjK8SE' },
      { hid: 'description', name: 'description', content: "Kardiyoloji Uzmanı Doç. Dr. Mehmet KAYRAK - Ankara" }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: "stylesheet", href:'https://fonts.googleapis.com/css?family=Cabin&display=swap'},
      { rel: "stylesheet", href:'https://fonts.googleapis.com/css?family=Mirza&display=swap'},
      { rel: 'apple-touch-icon', href: 'icon-152x152.png' },
      ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#73d423' },
    
  /*
  ** Global CSS
  */
  css: [
    
  ],
 
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/Closable.js',
    

  ],
 
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-151007687-1'
  },
  
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',
    'nuxt-i18n',
    ['vue-scrollto/nuxt', { duration: 1000, easing: "ease-in-out"}],  
    '@bazzite/nuxt-optimized-images',
    [
      'nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    },
    ],
  ],
  optimizedImages: {
    optimizeImages: true
  },
  i18n: {
    vueI18nLoader: true,
    locales: ['tr', 'en', 'ar'],
    defaultLocale: 'tr',
    defaultLocaleRouteNameSuffix: 'default',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'tr'
    },

  },

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
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  sitemap: {
    hostname: "https://www.mehmetkayrak.com",
    routes: [
      "/professions/1",
      "en/professions/1",
      "ar/professions/1",
      "/professions/2",
      "en/professions/2",
      "ar/professions/2",
      "/professions/3",
      "en/professions/3",
      "ar/professions/3",
      "/professions/4",
      "en/professions/4",
      "ar/professions/4",
      "/professions/5",
      "en/professions/5",
      "ar/professions/5",
      "/professions/6",
      "en/professions/6",
      "ar/professions/6",
      "/professions/7",
      "en/professions/7",
      "ar/professions/7",
      "/professions/8",
      "en/professions/8",
      "ar/professions/8",
      "/professions/9",
      "en/professions/9",
      "ar/professions/9",
      "/professions/10",
      "en/professions/10",
      "ar/professions/10",
      "/professions/11",
      "en/professions/11",
      "ar/professions/11",
      "/professions/12",
      "en/professions/12",
      "ar/professions/12",
      "/publications",
      "en/publications",
      "ar/publications",
      "/about",
      "en/about",
      "ar/about",
      "/certificates",
      "en/certificates",
      "ar/certificates",
      "/professions",
      "en/professions",
      "ar/professions",
      "/questions",
      "en/questions",
      "ar/questions",
      "/news",
      "en/news",
      "ar/news",


      
    ],
 
  },

}