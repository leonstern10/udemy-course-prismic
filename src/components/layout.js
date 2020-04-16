/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, Link, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';
import "./layout.css";
import SEO from './seo'
import CookieConsent from "react-cookie-consent";
import Navbarpage from "./navBarpage";




const MainWrapper =styled.main`
 
  margin: 0 auto;  `

  const navigationQuery = graphql `
   {
    prismic {
            allFooters {
            edges {
              node {
                aviso
                copyright
                footer {
                  label
                  link {
                    ... on PRISMIC_Footerpages {
                      _meta {
                        uid
                      }
                    }
                  }
                }
              }
            }
          }
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
  
  // const NavLink = styled.div `
  // margin: auto 0;
  

  // a{
  //   color:  #0C1C30;
  //   padding: 0;
  //   padding-right: 15px;
  //   padding-left 40px;
  //   text-decoration: none;
  //   font-family: 'Raleway', sans-serif;
  //   font-weight: bold;
  //   font-size: 16px;
    

  //   &:hover{
  //     color: #8461C9; 

  //   }
  // }
  
  
  // `;

  const Header = styled.header `
  display: flex;
  height: 75px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: 1px solid #CACACA;

  
  `;
  const NavLinks = styled.div `
  margin-right: auto;
  display: flex;
  `;
  
  const Logos = styled.div `
  margin: auto 0;
  width: 195px;
height: 42px;
@media (max-width: 400px) {
  width: 145px;
height: 26px;
  `;
  
  const CTA = styled.div `
margin: auto 0;
a{
background: #8461C9;
display: flex;
border-radius: 8px;
cursor: pointer;
float: right;
font-family: 'Raleway', sans-serif;
font-weight: bold;
padding: 16px 13px;
color: white;
text-decoration: none;
font-size: 12px;
&:hover{
  background: #1D0276;
}

}
`
const Footer = styled.div `
display: flex;
flex-direction: column;
box-sizing: border-box;
max-width: 1920px;
height: 200px;
background: #0C1C30;
align-items: center;
justify-content: center;

`
const FooterLinks = styled.div `
display: flex;
flex-direction: row;
padding: 35px 0;
border-bottom: 1px solid #CACACA;

`
const FooterLink = styled.div `

a{
  display: inline-flex;
  text-decoration: none;
  color: #ffffff; 
  padding: 0 30px;
}`

const Aviso =styled.div `
color: white;
margin: auto 0;
p{
  text-align:center;
  color: white;
  
}

}
`
const Copyright = styled.div ` 
color: white;
margin: auto 0;

p{
  text-align:center;
  color: white;
`



const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={`${navigationQuery}`}
      render={(data) => {
        return (
          <>
          <CookieConsent
          buttonStyle= {{ background: "#8461C9", color: "white" }}
           declineButtonStyle={{ background: "none" }}
          location="bottom"
          buttonText="Aceptar"
          acceptOnScroll={true}
          acceptOnScrollPercentage={50}
          // debug={true}
          cookieName="gatsby-gdpr-google-analytics">
            <div style={{ fontSize: "14x" }}>
Utilizamos cookies para analizar el tráfico de este sitio web, por lo que al continuar navegando, aceptas su uso.
</div>
</CookieConsent>
          <SEO/>
          <Navbarpage></Navbarpage>
            {/* <Header>
               <Logos>
              <Link to="/">
               <img src= {data.prismic.allNavigations.edges[0].node.logos.url} alt="eltop10 logo"/>
             </Link>
              </Logos>            
               <NavLinks>
                { data.prismic.allNavigations.edges[0].node.navigation_links.map((link) => {
            return (
              <NavLink key={link.link._meta.uid}>
                <Link to={`/${link.link._meta.uid}`}>
                {link.label}
                </Link>
              </NavLink>
            )
          })}
              </NavLinks> 
              <CTA>
                <Link to="/contact-us/">
                  {data.prismic.allNavigations.edges[0].node.contact_button.uid}
                  {data.prismic.allNavigations.edges[0].node.cta}
                </Link>
              </CTA>
            </Header> */}
            <MainWrapper>{children}</MainWrapper>
            <Footer>
              <FooterLinks>
                {data.prismic.allFooters.edges[0].node.footer.map((link) => {
                  return (
                    <FooterLink key={link.link._meta.uid}>
                      <Link to={`/${link.link._meta.uid}`}>{link.label}</Link>
                    </FooterLink>
                  )
                })}
              </FooterLinks>
              <Aviso>
                <p>
                  Aviso: Los redactores de eltop10 no están asociados con los
                  fabricantes de los productos recomendados. Sin embargo,
                  publicamos enlaces de diferentes tiendas online que nos
                  aprovisionan.
                </p>
              </Aviso>
              <Copyright>
                <p>Copyright © 2020 eltop10</p>
              </Copyright>
            </Footer>
          </>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout