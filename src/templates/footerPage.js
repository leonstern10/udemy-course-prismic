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
            page_content
                title
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
const PageWrapper = styled.section `
max-width: 1030px;
margin: 60px auto;
padding: 0 10px;
.page-wrapper{
  margin: 30px auto;
  `



const Footerpage = (props) => {
  const title = props.data.prismic.allFooterpagess.edges[0].node.title;
  const content = props.data.prismic.allFooterpagess.edges[0].node.page_content;
  console.log(props);
    return(
      
        <Layout>
          <PageWrapper>
          <RichText render={title}/>
         <RichText render = {content}/>
         </PageWrapper>   
        </Layout>
    )}
    export default Footerpage;