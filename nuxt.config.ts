// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Samet Keles",
      meta: [
        {
          name: "description",
          content:
            "Samet Keleş - Web Design Portfolio and Blog. Offering professional, creative, and unique web designs. You can find my works, blog posts, and contact information on my website.",
        },
        {
          name: "keywords",
          content:
            "Web Design Portfolio, Blog, unique web designs, creative blog posts, frontend, samet, frontend trends, web trends, fun blog posts, frontend blog, web blog, peronal portfolio, frontend github, frontend linkedin, developer github, developer linkedin",
        },
      ],
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
  modules: ["@nuxt/image"],
  image: {},
});
