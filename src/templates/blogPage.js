import React from 'react';
import { graphql } from 'gatsby';
import RichText from '../components/richText';
import Layout from '../components/layout';
import SliceZone from '../components/silceZone'
import SEO from '../components/seo'
import styled from 'styled-components';
import styles from "../css/page.module.css";


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
              ... on PRISMIC_BlogpageBodySmall_table {
                type
                label
                fields {
                  button_text
                  logo_image
                  number_rating
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


const BlogPage = (props) => {
    console.log(props);
    const blogTitle = props.data.prismic.allBlogpages.edges[0].node.blog_title;
    const author = props.data.prismic.allBlogpages.edges[0].node.author;
    const blogImage = props.data.prismic.allBlogpages.edges[0].node.blog_image.url;
    const blogDescription = props.data.prismic.allBlogpages.edges[0].node.blog_description;
    return (
        <div>
        <div>
        <RichText render= {blogTitle} />
        </div>
         <div>
         <RichText render= {author} />
         </div>
         <img className={styles.postImage} src={blogImage} alt="blog"/>
         <div>
         <RichText render= {blogDescription} />
         </div>
         {!!props.data.prismic.allBlogpages.edges[0].node.body &&
   <SliceZone body={props.data.prismic.allBlogpages.edges[0].node.body}/> //Need to check this because it was blocking the data from SliceZone
   }
         </div>
         
    )
}

export default BlogPage;