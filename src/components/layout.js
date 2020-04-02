/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import "./layout.css"
import styled  from 'styled-components';
import { query } from "../templates/page";

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
            logo
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
  
  const NavLink = styled.div `
  margin: auto 0;
  

  a{
    color:  #0C1C30;
    padding: 0;
    padding-right: 15px;
    padding-left 40px;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 16px;
    

    &:hover{
      color: #8461C9; 

    }
  }
  
  
  `;

  const Header = styled.header `
  display: flex;
  height: 109px;
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  border-bottom: 1px solid #CACACA;

  
  `;
  const NavLinks = styled.div `
  margin-right: auto;
  display: flex;
  `;
  const Logo = styled.div `
  margin: auto 0;
  
 a{ color: #8461C9;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 36px;
    margin-right: 35px;
    text-decoration: none;

 }
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
padding: 30px 0;
border-bottom: 1px solid #CACACA;

`
const FooterLink = styled.div `

a{
  text-decoration: none;
  color: #ffffff; 
  padding: 0 30px;
}`
  

  const Layout = ({ children }) => {


  return (

    <>
      <Header>
          
          <StaticQuery 
          query = {`${navigationQuery}`} 
          render = {(data) =>{
          console.log(data); 
          return (
            <>
            <Logo>
              <Link to= "/" > 
              {data.prismic.allNavigations.edges[0].node.logo}
              </Link>
            </Logo>
          
            <NavLinks>
              {/* { data.prismic.allNavigations.edges[0].node.navigation_links.map((link) => {
            return (
              <NavLink key={link.link._meta.uid}>
                <Link to={`/${link.link._meta.uid}`}>
                {link.label}
                </Link>
              </NavLink>
            )
          })} */}
            </NavLinks>
            <CTA>
            <Link to ="/contact-us/">
            {data.prismic.allNavigations.edges[0].node.contact_button.uid}
            {data.prismic.allNavigations.edges[0].node.cta}
            </Link>
            </CTA>
            </>
          )
          }} />
         
          </Header>
          <MainWrapper>{children}</MainWrapper>
     
    <Footer>
    <StaticQuery 
        query = {`${navigationQuery}`} 
        render = {(data) =>{
        console.log(data); 
        return (
          <>
          
        
          <FooterLinks>
            { data.prismic.allFooters.edges[0].node.footer.map((link) => {
          return (
            <FooterLink key={link.link._meta.uid}>
              <Link to={`/${link.link._meta.uid}`}>
              {link.label}
              </Link>
            </FooterLink>
          )
        })}
          </FooterLinks>
          
          </>
        )
        }} />

  
    </Footer>

      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
