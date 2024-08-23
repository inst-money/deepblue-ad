// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-aos", "@nuxtjs/i18n" ,"nuxt-swiper"],
  plugins: [
    {
      src: "~/plugins/aos.client.ts",
      mode: "client",
    },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ['en', 'zh', 'hk'], 
    strategy: "prefix_and_default",
    vueI18n: './i18n.config.ts' 
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  
});