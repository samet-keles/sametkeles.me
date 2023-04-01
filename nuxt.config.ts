// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "shortcut icon",
          href: "/img/favicon.ico",
          type: "image/x-icon",
        },
      ],
    },
  },

  css: ["@/assets/scss/main.scss"],
});
