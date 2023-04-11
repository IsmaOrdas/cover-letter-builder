// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: [
        'nuxt-windicss',
    ],
    app: {
        head: {
          htmlAttrs: { lang: "en" },
        },
    },
    css: ["@/assets/styles/main.scss"],
})
