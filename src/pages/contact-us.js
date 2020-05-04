import React from 'react';
import { graphql } from "gatsby"
import styled from 'styled-components';
import RichText from '../components/richText'
import SEO from "../components/seo"
import styles from "../css/ContactUs.module.css";
import Navbar from "../components/navBar"
import Footer from "../components/footer";

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
    height: 80vh;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column
    
    `
    
const Form = styled.form`
padding: 20px;
height: 799px;
width: 479px;
box-sizing: border-box;
background-color: #F0F0F0;
max-width: 800px;
box-shadow: inset 6px 0px 15px rgba(0, 0, 0, 0.25);

input {
    height: 52px;
    border: none;
    padding: 0 4px;
    width: 100%;
    text-color: #0C1C30;
    font-family: "Raleway", sans-serif;
    
    }
textarea{
    font-family: "Raleway", sans-serif;
    height: 80px;
    border: none;
    padding: 4px 4px;
    width: 100%;
    resize: none;
    color: #0C1C30
    }
`
const Button = styled.button`
box-shadow: none; 
background: #F98937;
color: #FFFFFF;
border: none;    
display: flex;
padding: 16px 30px; 
border-radius: 4px;
cursor: pointer;
font-family: 'Raleway', sans-serif;
font-weight: bold;
margin-left: 170px;
    margin-top: 26px;

`

const ContactUs = (props) => {
    console.log(props);

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
        <div>
        <div>
            <SEO title="Compara tu Producto" description="¿Quieres ser parte de nuestras listas de comparacion y atraer nuevos clientes?
                                                            Llena el formulario y cuentanos de tu producto."
            />
              
               
                <HeroWrapper heroImage={heroImage} >
                <Navbar/>
                    <div className={styles.titleContainer}>
                <RichText render={formTitle} />
                <RichText render={formDescription} />
                </div>
                </HeroWrapper>
                <div className={styles.bodyWrap}>
                <div className={styles.textWrap}>
                    
                {props.data.prismic.allContact_pages.edges[0].node.text_box.map((box, i) => {
        return (
            <div key={i}>      
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
                <img src={cartoonImage}></img>
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
                                    <textarea
                                        name={field.field_name}
                                        required={field.required === 'Yes'}
                                        placeholder={field.field_name} />
                                </div>
                            );

                        } else {
                            return (
                                <div className={styles.textField} key={i}>
                                    <input
                                        name={field.field_name}
                                        placeholder={field.field_name}
                                        required={field.required === 'Yes'}
                                        type={field.field_type} />
                                </div>
                            )
                        }
                    })}
                    <Button type="submit">
                        Asóciate con nosotros
                </Button>

                </Form>

                </div>
            </div>

            </div>
            <Footer/>
            </div> 
            
    )
}

export default ContactUs;