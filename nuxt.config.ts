// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],

  build: {
    transpile: ["gsap"],
  },
  app: {
    baseURL: "/Home",
  },
});
