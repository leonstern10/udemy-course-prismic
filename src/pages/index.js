import React from "react"
import { graphql } from "gatsby"
import SliceZone from "../components/silceZone"
import Footer from "../components/footer";
import SEO from "../components/seo"
import CookieConsent from "react-cookie-consent";


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
     <SEO title="Compara y escoge los mejores productos" description= "eltop10.co es tu mejor aliado al momento de buscar un servicio en Internet, compara a los mejores proveedores para tomar las mejores decisiones."/>
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
    <SliceZone body={props.data.prismic.allHome_pages.edges[0].node.body}/>
  <Footer/>
  </>
  )}

export default IndexPage
