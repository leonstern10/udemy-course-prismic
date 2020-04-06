/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"


const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImge: image
        url
        defaultKeywords: keywords
        siteLanguage
      }
    }
  }
`


const SEO = ({ title, description, keywords, image }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultImage,
          url,
          defaultKeywords,
          siteLanguage,
          
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${image ? image : url+defaultImage}`,
        keywords: keywords || defaultKeywords,
      }


      return (
        <Helmet>
          <title>{seo.title}</title>
          <html lang ={siteLanguage}/>
          <meta name="image" content={seo.image} />
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta name="robots" content="index,follow" />
        </Helmet>
      )
    }}
  />
)







export default SEO
