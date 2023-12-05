// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxt/content", "@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  app: {
    //pageTransition: { name: "page", mode: "out-in" },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  dirs: [
    // Scan top-level modules
    "composables",
  ],
  runtimeConfig: {
    public: {
      secret: process.env.SECRET,
      API_BASE_URL: process.env.API_BASE_URL,
      SHORT_NAME: process.env.SHORT_NAME,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
        },
      },
    },
  },
  css: ["~/assets/scss/main.scss"],

  build: {
    transpile: ["primevue"],
  },
  i18n: {
    vueI18n: "./translator/i18n.config.ts",
  },

  cssSourceMap: true,
});
