/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import "./layout.css";
import SEO from './seo'
import CookieConsent from "react-cookie-consent";
import Navbarpage from "./navBarpage";
import Footer from "./footer";




const MainWrapper =styled.main`

  margin: 0 auto;  `

  const navigationQuery = graphql `
   {
    prismic {
           
              allNavigations {
        edges {
          node {
            cta
            contact_button {
              ... on PRISMIC_Contact_page {
                _meta {
                  uid
                }
              }
            }
            logos
              navigation_links {
              label
              link {
                ... on PRISMIC_Contact_page {
                  _meta {
                    uid
                  }
                }
                ... on PRISMIC_Page {
                  _meta {
                    uid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `
  
  const Container = styled.section `
  min-height: 100%;
  ` ;


const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={`${navigationQuery}`}
      render={(data) => {
        return (
          <Container>
            
          <CookieConsent
          buttonStyle= {{ background: "#8461C9", color: "white" }}
           declineButtonStyle={{ background: "none" }}
          location="bottom"
          buttonText="Aceptar"
          acceptOnScroll={true}
          acceptOnScrollPercentage={50}
          // debug={true}
          cookieName="gatsby-gdpr-google-analytics">
            <div style={{ fontSize: "14x", fontFamily: "Open-Sans" }}>
Utilizamos cookies para analizar el tráfico de este sitio web, por lo que al continuar navegando, aceptas su uso.
</div>
</CookieConsent>
          <SEO/>
          <Navbarpage></Navbarpage>

            <MainWrapper>{children}</MainWrapper>
            <Footer></Footer>
          
          </Container>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout