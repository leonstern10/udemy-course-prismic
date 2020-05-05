import React from 'react';
import { graphql } from "gatsby"
import styled from 'styled-components';
import RichText from '../components/richText'
import SEO from "../components/seo"
import styles from "../css/contactUs.module.css";
import Layout from "../components/layout"

export const query = graphql`
{
    prismic {
    allContact_pages {
      edges {
        node {
          cartoon_content
          cartoon_image
          cartoon_title
          form_description
          form_title
          hero_image
          result_content
          result_title
          title_contact
          text_box {
            box_content
            box_title
          }
          form_fields {
            field_name
            field_type
            required
          }
        }
      }
    }
  }
}
`
const HeroWrapper = styled.section `
    background: url('${props => props.heroImage}');
    height: 60vh;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column
    align-items: center;
    justify-content: center;
    `
    
const Form = styled.form`
padding: 20px;
height: 799px;
width: 479px;
box-sizing: border-box;
background-color: #F0F0F0;
max-width: 800px;
box-shadow: inset 6px 0px 15px rgba(0, 0, 0, 0.25);
flex-wrap: wrap;
@media (max-width: 1031px ) {
    box-shadow: none;
    display:flex;
    flex-direction: row;
    width: 479px;
    justify-content: flex-start;
    height: 549px;
    margin-top: 50px;

    h1{
        margin-left:10px;
    }
}
`



const ContactUs = (props) => {
  

    const heroImage= props.data.prismic.allContact_pages.edges[0].node.hero_image.url;
    const formTitle = props.data.prismic.allContact_pages.edges[0].node.form_title;
    const formDescription= props.data.prismic.allContact_pages.edges[0].node.form_description;
    const ResultTitle= props.data.prismic.allContact_pages.edges[0].node.result_title;
    const ResultContent= props.data.prismic.allContact_pages.edges[0].node.result_content;
    const cartoonImage= props.data.prismic.allContact_pages.edges[0].node.cartoon_image.url;
    const cartoonTitle= props.data.prismic.allContact_pages.edges[0].node.cartoon_title;
    const cartoonContent= props.data.prismic.allContact_pages.edges[0].node.cartoon_content;
    const titleContact= props.data.prismic.allContact_pages.edges[0].node.title_contact;
   
    return (
        <Layout>
        <div>
            
            <SEO title="Compara tu Producto" description="¿Quieres ser parte de nuestras listas de comparacion y atraer nuevos clientes?
                                                            Llena el formulario y cuentanos de tu producto."
            />
              
               
                <HeroWrapper heroImage={heroImage} >
             
                    <div className={styles.titleContainer}>
                <RichText render={formTitle} />
                <RichText render={formDescription} />
                </div>
                </HeroWrapper>
                <div className={styles.bodyWrap}>
                   
                <div className={styles.textWrap}>
                
                    
                {props.data.prismic.allContact_pages.edges[0].node.text_box.map((box, i) => {
        return (
            <div className={styles.boxWrap} key={i}>      
                <div className={styles.textBox}>
                <RichText render={box.box_title}/>
                <RichText render = {box.box_content}/>
                </div>
                </div>
            )
        })}
     </div>     
        <div className ={styles.resultWrap}>
                <div className ={styles.resultBox}>
                    <RichText render={ResultTitle} />
                    <RichText render={ResultContent} />
                </div>
                </div>
                
                <div className={styles.contactForm}>
               
                <div className={styles.cartoonWrap}>
                
                <div className={styles.cartoonTitle}>
                <RichText render = {cartoonTitle}></RichText>
                </div>
                <RichText render = {cartoonContent}></RichText>
                <div className={styles.cartoonImage}>
                <img src={cartoonImage} alt="eltop10"></img>
                </div>
                </div>
  
                <Form name="contact-us"
                    method="POST"
                    data-netlify="true"
                    action="/contact-success">
                        <RichText render={titleContact}/>
                    <input type="hidden" name="form-name" value="contact-us" />
                    {props.data.prismic.allContact_pages.edges[0].node.form_fields.map((field, i) => {
                        if (field.field_type === 'textarea') {
                            return (
                                <div className={styles.textArea} key={i}>
                                    <textarea className={styles.messageInput}
                                        name={field.field_name}
                                        required={field.required === 'Yes'}
                                        placeholder={field.field_name} />
                                </div>
                            );

                        } else {
                            return (
                                <div className={styles.textField} key={i}>
                                    <input className={styles.textInput}
                                        name={field.field_name}
                                        placeholder={field.field_name}
                                        required={field.required === 'Yes'}
                                        type={field.field_type} />
                                </div>
                            )
                        }
                    })}
                    <button className={styles.cta} type="submit">
                        Enviar
                </button>

                </Form>

                </div>
            </div>

            </div>
           
            </Layout>
            
    )
}

export default ContactUs;