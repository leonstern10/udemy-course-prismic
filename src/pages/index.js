import React from "react"
import { graphql } from "gatsby"
import SliceZone from "../components/silceZone"
import Footer from "../components/footer";
import SEO from "../components/seo"


export const query = graphql `
query MyQuery {
  prismic {
    allHome_pages {
      edges {
        node {
          body {
            ... on PRISMIC_Home_pageBodyAbout___contact {
              type
              label
              primary {
                about_content
                about_title
                button_label
                contact_titulo
                contact_content
                contact_link {
                  ... on PRISMIC_Contact_page {
                    form_title
                    _meta {
                      uid
                    }
                  }
                }
              }
            }
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
              
                article_title
                list_image
                color
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

  <>
     <SEO title="Inicio" description= " tu mejor aliado al momento de buscar un producto o servicio en internet ya que te permite conocer y comparar a los mejores proveedores en una amplia variedad de industrias y categorías."/>
    <SliceZone body={props.data.prismic.allHome_pages.edges[0].node.body}/>
  <Footer/>
  </>
  )}

export default IndexPage
