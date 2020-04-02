import React from 'react';
import { graphql } from 'gatsby';
import RichText from '../components/richText';
import Layout from '../components/layout';
import SliceZone from '../components/silceZone'
import styled from 'styled-components';


export const query = graphql`
query FooterpageQuery($id: String){
    prismic {
      allFooterpagess(id: $id) {
        edges {
          node {
            _meta {
              uid
              id
            }
          }
        }
      }
    }
  }

  
`



const Footerpage = (props) => {
  console.log(props);
    return(
      
        <Layout>
        <h1>
            Termino de uso jjjij
        </h1>
        </Layout>
    )}
    export default Footerpage;