/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
    ],
  siteMetadata : {
    title : 'Prateek Portfolio',
    description : 'Personal Portfolio and Projects',
    copyright : 'This website is personal intellectual property of Prateek',
  }
}
