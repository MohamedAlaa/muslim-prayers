module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("sass"),
            },
        },
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Muslim Prayers`,
                short_name: `Pray`,
                description: `Learn to pray the 5 daily prayers in an easy and amusing way.`,
                lang: `en`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `standalone`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
                icons: [
                    {
                        src: `/favicons/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicons/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ], // Add or remove icon sizes as desired
                localize: [
                    {
                        start_url: `/es/`,
                        lang: `es`,
                        name: `Oraciones Musulmanas`,
                        short_name: `Orar`,
                        description: `Aprende a rezar las 5 oraciones diarias de una manera fácil y divertida.`,
                    },
                    {
                        start_url: `/de/`,
                        lang: `de`,
                        name: `Moslimgebeden`,
                        short_name: `Bidden`,
                        description: `Leer de 5 dagelijkse gebeden op een gemakkelijke en amusante manier te bidden.`,
                    },
                ],
                cache_busting_mode: `name`, // `query`(default), `name`, or `none`
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: [`en`, `es`, `de`],
                defaultLanguage: `en`,
                redirect: false,
                redirectComponent: require.resolve(`./src/components/redirect.js`),
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                precachePages: [`/`, `/en/*`, `/es/*`, `/de/*`],
                workboxConfig: {
                    globPatterns: ['**/*']
                }
            }
        },
    ],
}