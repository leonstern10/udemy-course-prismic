import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
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
      }
    }
  `)
  return <div>
      <div>
      {data.prismic.allFooters.edges[0].node.footer.map((link) => {
                  return (
                    <div key={link.link._meta.uid}>
                      <Link to={`/${link.link._meta.uid}`}>{link.label}</Link>
                    </div>
                  )
                })}
              </div>
              <div>
                <p>
                  Aviso: Los redactores de eltop10 no están asociados con los
                  fabricantes de los productos recomendados. Sin embargo,
                  publicamos enlaces de diferentes tiendas online que nos
                  aprovisionan.
                </p>
              </div>
              <div>
                <p>Copyright © 2020 eltop10</p>
              </div>
  </div>
}

export default Footer
