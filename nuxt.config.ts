// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@pinia/nuxt'],
  ssr: false,
  spaLoadingTemplate: false,
  css: ['assets/styles/scss/reset.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "sass:map"; @import "assets/styles/scss/_variables.scss"; @import "assets/styles/scss/_mixin.scss"; @import "@fontsource-variable/mulish";',
        },
      },
    },
  },
  components: [
    {
      path: '@/components/svg',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    },
    baseURL: '/tienda-ropa-online/',
    buildAssetsDir: 'assets',
  },
  typescript: {
    strict: true,
    typeCheck: 'build',
  },
})
