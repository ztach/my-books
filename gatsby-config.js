require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Moje książki`,
    subTitle: 'Lista moich ulubionych książek',
    description: `Witam wszystkich na mojej stronie. Bazgrolę tu sobie o moich ksiunżkach`,
    welcome: 'Cześć książkoluby',
    author: `@Staszek Olejnik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Squada One`,
            subsets: [`latin-ext`],
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
          {
            family: `Montserrat`,
            subsets: [`latin-ext`],
            variants: [`300`, `400`, `500`, `600`, `700`],
          },

          {
            family: `Roboto`,
            subsets: [`latin-ext`],
            variants: [`300`, `400`, `500`, `700`],
          },
        ],
      },
    },

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
