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
