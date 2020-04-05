import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SliceZone from "../components/silceZone"
import {Helmet} from "react-helmet"

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
    <Helmet>
      <title> elTop10.co | Compara y escoje los mejores productos </title>
      <meta name= "descripcion" content = "Nuestros expertos de prueban y comparan los mejores productos en diferentes categorías. Hacemos recomendaciones para ayudarte a tomar la mejor decision" />
      <meta name ="keywords" content = "Los 10 mejores, Los mejores productos,"/>
      <meta name = "robots" content ="index,follow"></meta>
    </Helmet>
    <SliceZone body={props.data.prismic.allHome_pages.edges[0].node.body}/>
  </Layout>
  )}

export default IndexPage
