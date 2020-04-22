import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"


const NotFoundWrap = styled.section `
     margin: 60px auto;
     max-width: 1000px;
     ` ;
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundWrap>
    <h1>404</h1>
    <p>La pagina que intentas solicitar no esta en el servidor.</p>
    </NotFoundWrap>
  </Layout>
)

export default NotFoundPage
