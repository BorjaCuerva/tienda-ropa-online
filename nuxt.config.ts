// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxt/content'],
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
    pageTransition: { name: 'page', mode: 'in-out' },
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      title: 'Sportivat, la mejor tienda de ropa deportiva online',
    },
    baseURL: '/tienda-ropa-online/',
    buildAssetsDir: 'assets',
  },
  typescript: {
    strict: true,
    typeCheck: 'build',
  },
})
