// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    // baseURL: "/MMPRO_layout/",
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          charset: "UTF-8",
        },
      ],
      title: "MMPRO Landing",
    },
  },
  css: ["@/assets/scss/style.scss"],
});
