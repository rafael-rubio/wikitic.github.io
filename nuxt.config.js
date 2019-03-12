// import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import exercises from './static/exercises.json'

const canonical = 'https://wikitic.github.io'
const title = 'Wiki TIC'
const description = 'Ejercicios prácticos aplicados a las TIC en educación'
const routerBase = {
  router: {
    base: process.env.DEPLOY_ENV === 'MASTER' ? '/' : '/'
  }
}

export default {
  mode: 'universal',

  ...routerBase,
  env: {
    canonical: canonical,
    title: title,
    description: description
  },

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /*
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
      */
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Serif+JP:200,300,400,500,700,900'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#2d2d2d',
    height: '3px'
  },

  /*
  ** Global CSS
  */
  // css: ['~/assets/style/app.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: ['@/plugins/vuetify'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    */

    /*
    ** You can extend webpack config here
    */
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

  /*
  ** generate
  */
  generate: {
    routes: async function() {
      const e = await exercises.map(exercise => {
        return `/${exercise.alias}`
      })
      return Promise.all([e]).then(v => {
        return [...v[0]]
      })
    }
  }
}
