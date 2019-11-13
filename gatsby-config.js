module.exports = {
  siteMetadata: {
    title: `Cub Scout Pack 723`,
    description: `Bethel Cub scout Pack 723 of Greensboro, NC`,
    author: `M Lamont Taylor`,
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Greensboro Cub Scout Pack 723`,
        short_name: `Pack723`,
        start_url: `/`,
        background_color: `#003f99`,
        theme_color: `#003f99`,
        display: `minimal-ui`,
        icon: `src/images/pack723.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
