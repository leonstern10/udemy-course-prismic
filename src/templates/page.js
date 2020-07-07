import React from 'react';
import { graphql } from 'gatsby';
import RichText from '../components/richText';
import Layout from '../components/layout';
import SliceZone from '../components/silceZone'
import styled from 'styled-components';
import styles from "../css/page.module.css";
import SEO from '../components/seo'


export const query = graphql`
query PageQuery($id: String){
prismic {
    allPages(id: $id) {
      edges {
        node {
          meta_description
          meta_title
          page_title
          author_name
          post_image
          content
          body {
            ... on PRISMIC_PageBodySidebar {
              type
              label
              primary {
              sidebar_title
              }
              fields {
                article_image
                article_title
                page_link {
                  ... on PRISMIC_Blogpage {
                    _meta {
                      uid
                    }
                  }
                  ... on PRISMIC_Page {
                    _meta {
                      uid
                    }
                  }
                }
              }
            }
            ... on PRISMIC_PageBodyFaq {
              type
              label
              primary {
                faq_title
              }
              fields {
                answer
                question
              }
            }
            ... on PRISMIC_PageBodyComparison_grid {
              type
              label
              
              fields {
                name
                tag
                number_rank
                best_for
                list_price
                feature
                rating_number
                rating_star
                price
                read_more
                service_description
                service_logo
                web_label
                web_link {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
              }
            }
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
max-width: 1420px;
margin: 60px auto;
padding: 0 10px;
.page-wrapper{
  margin: 30px auto;
}
@media (max-width: 700px) {
  margin: 20px auto;
 }
@media (max-width: 350px) {
 padding:0 5px;
}


`;

const Page = (props) => {
const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
const authorName = props.data.prismic.allPages.edges[0].node.author_name;
const postImage = props.data.prismic.allPages.edges[0].node.post_image.url;
const content = props.data.prismic.allPages.edges[0].node.content;
const metaTitle = props.data.prismic.allPages.edges[0].node.meta_title;
const metaDecription = props.data.prismic.allPages.edges[0].node.meta_description;
const AltImage = props.data.prismic.allPages.edges[0].node.post_image.alt;


// let description =  '';
//           if (typeof content === 'string') {
//             description = content
//           } else { // content is an object 
//             description = content[1].text
//           }
    return (
        <Layout>
          <SEO 
          title = {metaTitle} 
          description ={metaDecription}
            image = {postImage}
            pathname={props.data.prismic.allPages.edges[0].node._meta.id}

          />
          <PageWrapper className={styles.pageWrapper}> 
            <div className={styles.headerSection}>
              <div className={styles.titleWrapper}>
           
          <div className={styles.pageTitle}>
          <RichText render= {pageTitle} />
          </div>
          <div className={styles.author}>
          <RichText render= {authorName} />
          </div>
          </div>
          <img className={styles.postImage} src={postImage} alt={AltImage}/>
          </div>
          <div className={styles.postDescription}>
          <RichText render= {content} />
          </div>
           
          {/* <SliceZone body={props.data.prismic.allPages.edges[0].node.body}/> */}
     
   {!!props.data.prismic.allPages.edges[0].node.body &&
   <SliceZone body={props.data.prismic.allPages.edges[0].node.body}/> //Need to check this because it was blocking the data from SliceZone
   }
  
          </PageWrapper>
   
   
   </Layout>
);
}

export default Page;