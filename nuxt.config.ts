// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxthq/ui',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  devtools: {
    enabled: true,
  },
  ui: {
    global: true,
    icons: 'all',
  },
})
