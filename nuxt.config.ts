// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "shortcut icon",
          href: "/img/favicon.png",
          type: "image/x-icon",
        },
      ],
    },
  },

  css: ["@/assets/scss/main.scss"],
});
