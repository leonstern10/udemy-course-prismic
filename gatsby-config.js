module.exports = {
  siteMetadata: {
    title: `elTop10.co | Compara y escoje los mejores productos`,
    description: `Nuestros expertos prueban y comparan los mejores productos en diferentes categorías. Hacemos recomendaciones para ayudarte a tomar la mejor decision.`,
    author: `eltop10.co`,
    siteLanguage: 'español',
    keywords: 'Los 10 mejores, Los mejores productos',
    image: './src/images/',
    url: 'https://eltop10.co/',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'Udemy-course-prismic',
        pages:[{
          type: 'Page',
          match: '/:uid',
          path: '/',
          component: require.resolve('./src/templates/page.js')
        }, {
          type: 'Footerpages',
          match: '/:uid',
          path: '/',
          component: require.resolve('./src/templates/footerPage.js')
        
        }]
        
      }
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

