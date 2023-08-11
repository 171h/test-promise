// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxthq/ui',
  ],
  devtools: {
    enabled: true,
  },
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  },
})
