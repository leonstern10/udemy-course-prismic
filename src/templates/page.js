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
              primary {
                products_title
              }
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
}

`

const PageWrapper = styled.section `
max-width: 1030px;
margin: 60px auto;
padding: 0 10px;
.page-wrapper{
  margin: 30px auto;
}



  
}
.title-author{
  box-sizing: border-box;
  background-color: #EEEEEE;
  margin: 0 0 0;
  padding: 50px 84px 50px 50px;
  
.post-image{
  max-height: 

}

}

.post-description{
  max-width: 700px;
  padding-top: 40px ;
  line-height: 28px;
  color: #0C1C30;
  font-size: 18px;
 
}
.header-section{
  display: flex;
height: 280px;
align-items: center;

`;

const Page = (props) => {
const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
const authorName = props.data.prismic.allPages.edges[0].node.author_name;
const postImage = props.data.prismic.allPages.edges[0].node.post_image.url;
const content = props.data.prismic.allPages.edges[0].node.content;


    return (
        <Layout>
          <PageWrapper className="page-wrapper"> 
            <div className="header-section">
            <div className="title-author">
          <div className="page-title">
          <RichText render= {pageTitle} />
          </div>
          <RichText render= {authorName} />
          </div>
          <img className="post-image" src={postImage} alt="Post"/>
          </div>
          <div className="post-description">
          <RichText render= {content} />
          </div>
           
          <SliceZone body={props.data.prismic.allPages.edges[0].node.body}/>

   {/* {!!props.data.prismic.allPages.edges[0].node.body &&
   <SliceZone body={props.data.prismic.allPages.edges[0].node.body}/> //Need to check this because it was blocking the data from SliceZone
   } */}
          </PageWrapper>
   
   
   </Layout>
);
}

export default Page;