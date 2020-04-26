import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";


const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImge: image
        siteUrl
        defaultKeywords: keywords
        twitterUsername
      }
    }
  }
`



const SEO = ({ title, description, keywords, image }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    siteUrl,
    defaultKeywords,
    twitterUsername,
  } = site.siteMetadata
  
  return (
    <Helmet htmlAttributes={{ lang: "es" }} title={`${title} | ${defaultTitle}`}>
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={`${image ? image : siteUrl+defaultImage}`} />
      <meta name="url" content={`${siteUrl}${pathname}`} />
      <meta name="keywords" content={ keywords || defaultKeywords} />
      <meta name="robots" content="index,follow" />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${defaultImage}`} />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
}



