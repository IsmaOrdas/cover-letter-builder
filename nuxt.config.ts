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
    runtimeConfig: {
        apiToken: process.env.API_SECRET,
        apiOrg: process.env.API_ORG
    }
})
