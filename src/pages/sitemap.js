import React from "react";
import { graphql, Link } from "gatsby"
import styled from 'styled-components';
import Layout from '../components/layout';


export const  query = graphql `
{
    prismic {
        allSitemaps {
          edges {
            node {
              sitemap {
                label
                link {
                  ... on PRISMIC_Page {
                    _meta {
                      uid
                    }
                  }
                  ... on PRISMIC_Contact_page {
                    _meta {
                      uid
                    }
                  }
                  ... on PRISMIC_Home_page {
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
     const SitemapWrapper = styled.section `
     margin: 60px auto;
     max-width: 1000px;
     ` ;
     
     const SitemapLink = styled.section `
     a{
     text-decoration: none;
     }

     ` ;
     
     
     const Sitemap = (props) => {
         console.log(props);
         return(
            <Layout>
             <SitemapWrapper>
            {props.data.prismic.allSitemaps.edges[0].node.sitemap.map((link) => {
            return (
              <SitemapLink key={link.link._meta.uid}>
                <Link to={`/${link.link._meta.uid}`}>
                {link.label}</Link>
              </SitemapLink>
            )
          })}
          </SitemapWrapper>
           
              </Layout>
          )
        }

export default Sitemap;