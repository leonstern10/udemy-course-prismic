import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SliceZone from "../components/silceZone"

export const query = graphql `
query MyQuery {
  prismic {
    allHome_pages {
      edges {
        node {
          body {
            ... on PRISMIC_Home_pageBodyHero {
              type
              label
              primary {
                hero_content
                hero_title
                hero_image
              }
            }
            ... on PRISMIC_Home_pageBodyLists_grid {
              type
              primary {
                list_title
              }
              fields {
                button_destination {
                  ... on PRISMIC_Page {
                    page_title
                    content
                    _meta {
                      uid
                    }
                  }
                }
                button_label
                article_title
                content
                list_image
              }
            }
          }
        }
      }
    }
  }
}
`;

const IndexPage = (props) => {
  return(

  <Layout>
    <SliceZone body={props.data.prismic.allHome_pages.edges[0].node.body}/>
  </Layout>
  )}

export default IndexPage
