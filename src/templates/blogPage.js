import React from 'react';
import { graphql } from 'gatsby';
import RichText from '../components/richText';
import Layout from '../components/layout';
import SliceZone from '../components/silceZone'
import SEO from '../components/seo'
import styled from 'styled-components';
import styles from "../css/blogPage.module.css";


export const query = graphql`
query BlogQuery($id: String) {
    prismic {
      allBlogpages(id: $id) {
        edges {
          node {
            blog_title
            author
            blog_description
            blog_image
            body {
              ... on PRISMIC_BlogpageBodySidetable {
                type
                label
                primary {
                  button_label
                  sidetable_title
                  compare_all {
                    ... on PRISMIC_Page {
                      _meta {
                        uid
                        type
                      }  
                      _linkType
                    }
                  }
                }
                fields {
                  logo
                  ranking
                  rating_number
                  web_link {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                }
              }
              ... on PRISMIC_BlogpageBodyBlog_content {
                type
                label
                primary {
                  intro_title
                }
                fields {
                  section_content
                  section_title
                }
              }
              ... on PRISMIC_BlogpageBodyAbout___contact {
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
              ... on PRISMIC_BlogpageBodyFaq {
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
              ... on PRISMIC_BlogpageBodySmall_table {
                type
                label
                fields {
                  button_text
                  logo_image
                  number_rating
                  rank_number
                  rating_stars
                  web_link {
                    ... on PRISMIC__ExternalLink {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const BlogPageWrapper = styled.section `
max-width: 1420px;
margin: 60px auto;
padding: 0 100px;
.page-wrapper{
  margin: 30px auto;
}
@media (max-width: 760px) {
  padding: 0 40px;
 }
@media (max-width: 700px) {
  margin: 20px auto;
 }
 @media (max-width: 550px) {
  padding:0 20px;
 }
@media (max-width: 350px) {
 padding:0 5px;
}


`;


const BlogPage = (props) => {
    console.log(props);
    const blogTitle = props.data.prismic.allBlogpages.edges[0].node.blog_title;
    const author = props.data.prismic.allBlogpages.edges[0].node.author;
    const blogImage = props.data.prismic.allBlogpages.edges[0].node.blog_image.url;
    const blogDescription = props.data.prismic.allBlogpages.edges[0].node.blog_description;
    const Alt = props.data.prismic.allBlogpages.edges[0].node.blog_image.alt;

    return (
      <Layout>
      <BlogPageWrapper className={styles.pageWrapper}> 
      <div className={styles.headerSection}>
        <div className={styles.titleWrapper}>
        <div className={styles.pageTitle}>
        <RichText render= {blogTitle} />
        </div>
         <div className={styles.author}>
         <RichText render= {author} />
         </div>
         </div>
         <img className={styles.postImage} src={blogImage} alt={Alt}/>
         </div>
         <div className={styles.postDescription}>
         <RichText render= {blogDescription} />
         </div>
         {!!props.data.prismic.allBlogpages.edges[0].node.body &&
   <SliceZone body={props.data.prismic.allBlogpages.edges[0].node.body}/> //Need to check this because it was blocking the data from SliceZone
   }
         </BlogPageWrapper>
         </Layout>
    )
}

export default BlogPage;