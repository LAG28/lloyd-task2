// nuxt.config.{js,ts}
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "vuetify-nuxt-module", '@pinia/nuxt'
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  }
})