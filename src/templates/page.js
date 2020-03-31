import React from 'react';
import { graphql } from 'gatsby';
import RichText from '../components/richText';
import Layout from '../components/layout';
import SliceZone from '../components/silceZone'
import styled from 'styled-components';

export const query = graphql`
query PageQuery($id: String){
prismic {
    allPages(id: $id) {
      edges {
        node {
          page_title
          author_name
          post_image
          content
          body {
            ... on PRISMIC_PageBodyPost_grid {
              type
              label
              fields {
                button_label
                product_description
                product_image
                product_name
                product_link {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
              }
            }
          }
          _meta {
            id
            uid
          }
        }
      }
    }
  }
}`

const PageWrapper = styled.section `
max-width: 800px;
margin: 0 auto;
`

const Page = (props) => {
const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
const content = props.data.prismic.allPages.edges[0].node.content;
    return (
        <Layout>
          <PageWrapper>

          <RichText render= {pageTitle} />
   <RichText render= {content} />
   {!!props.data.prismic.allPages.edges[0].node.body &&
   <SliceZone body={props.data.prismic.allPages.edges[0].node.body}/>
   }
          </PageWrapper>
   
   
   </Layout>
);
}

export default Page;