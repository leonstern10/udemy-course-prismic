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
  max-width: 800px;
  margin: 0 auto;  `

  const navigationQuery = graphql `
   {
    prismic {
      allNavigations {
        edges {
          node {
            navigation_links {
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
    }
  }
  `
  const NavLink = styled.div ``;

  const Header = styled.header `
  display: flex;
  backgorund: white;
  height: 66px; 
  padding: 0 100px;
  box-sizing: border-box;
  `;

  const Layout = ({ children }) => {


  return (
    <>
        <Header>
        <StaticQuery 
        query = {`${navigationQuery}`} 
        render = {(data) =>{
        console.log(data); 
        return data.prismic.allNavigations.edges[0].node.navigation_links.map((link) =>
        {
          return (
            <NavLink key={link.link._meta.uid}>
              <Link to={`/${link.link._meta.uid}`}>
              {link.label}
              </Link>
            </NavLink>
          )

        })

        }} />
        </Header>
        <MainWrapper>{children}</MainWrapper>
   
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
