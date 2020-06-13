module.exports = {
  siteMetadata: {
    title: `elTop10.co`,
    description: `Nuestros expertos prueban y comparan los mejores servicios en diferentes categorías. Hacemos recomendaciones para ayudarte a tomar la mejor decision.`,
    author: `eltop10.co`,
    siteLanguage: 'es',
    keywords: 'Los 10 mejores, Los mejores productos',
    twitterUsername: "@Eltop10C",
    image: './src/images/eltop10 hero.png',
    siteUrl: 'https://eltop10.co',
  },
  
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
       
        trackingIds: [
        "UA-163219293-1",// Google Analytics / GA
        "AW-656248674", // Google Ads / Adwords / AW
      ],
      pluginConfig: {
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    }
    },
    `gatsby-plugin-advanced-sitemap`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`400`, '600', '700'],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'Udemy-course',
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
        
        },
        {
          type: 'Blogpage',
          match: '/blog/:uid',
          path: '/blog/',
          component: require.resolve('./src/templates/blogPage.js')
        
        }]
        
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://eltop10.co',
        sitemap: 'https://eltop10.co/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [
              { userAgent: '*', allow: '/' }, 
              { userAgent: 'Googlebot',  disallow: ['']  }
              
            ]
          }
        }
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://eltop10.co`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
   
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        // The property ID; the tracking code won't be generated without it.
        trackingId: "UA-163219293-1", 
        // Optional parameter (default false) - Enable analytics in development mode.
        enableDevelopment: true, // default false
        // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
        anonymizeIP: true,
        // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
        autoStartWithCookiesEnabled: false, 
        // Optional parameter - Configuration for react-ga and google analytics 
        reactGaOptions: {
            debug: true,
            gaOptions: {
                sampleRate: 100
            }
        }
      },
    },
  //   {
  //     resolve: `gatsby-plugin-cookiehub-banner`,
  //     options: {
  //         // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
  //         cookieHubId: "https://cookiehub.net/cc/ad0f17c1.js",
  //         // Optional parameter (default false) - Use new v2 API.
  //         cookieHubV2Api: false,
  //         // Categories configured with CookieHub
  //         categories: [
  //         { 
  //             categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
  //             cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled' // Your custom cookie name
  //         },
  //         { 
  //             categoryName: 'marketing',
  //             cookieName: 'marketing-enabled'
  //         }
  //         ]
  //     }
  // },
  
  ],
}

