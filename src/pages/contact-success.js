import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components'
import SEO from "../components/seo"

const WrapSuccess = styled.section`
     margin: 60px auto;
     max-width: 1000px;
     min-height: 100%
     ` ;

const ContactSuccess = () => {

    return (
        <Layout>
            <SEO title="Gracias por contactarnos"/>
            <WrapSuccess>
                <h1>
                Gracias por contactarnos
                </h1>
            </WrapSuccess>
        </Layout>
    )
};

export default ContactSuccess;