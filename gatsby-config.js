require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Moje książki`,
    subTitle: "Lista moich ulubionych książek",
    description: `Witam wszystkich na mojej stronie. Bazgrolę tu sobie o moich ksiunżkach`,
    welcome: "Cześć książkoluby",
    author: `@Staszek Olejnik`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        // Preview the latest version of records instead of the published one
        previewMode: false,
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
        apiUrl: "https://site-api.datocms.com"
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Squada One`,
            subsets: [`latin-ext`],
            variants: [`300`, `400`, `500`, `600`, `700`]
          },
          {
            family: `Montserrat`,
            subsets: [`latin-ext`],
            variants: [`300`, `400`, `500`, `600`, `700`]
          },

          {
            family: `Roboto`,
            subsets: [`latin-ext`],
            variants: [`300`, `400`, `500`, `700`]
          }
        ]
      }
    }
  ]
};
