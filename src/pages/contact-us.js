import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout';
import styled from 'styled-components';
import RichText from '../components/richText'
import SEO from "../components/seo"
import styles from "../css/ContactUs.module.css";
import Navbar from "../components/navBar"

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
padding: 10px;
background-color: rgba(0, 0, 0, 0.025);
border-radius: 4px;
padding: 50px;
margin-top: 20px;
max-width: 800px;
margin-left: auto ;
margin-right: auto ;
input {
    margin-bottom: 10px; 
    border-radius: 4px;
    height: 40px;
    border: none;
    padding: 0 4px;
    width: 100%;
    text-color: #0C1C30;
    box-shadow: 0px 5px 8px -1px rgba(0, 0, 0, 0.05);
    }
textarea{
    margin-bottom: 10px; 
    border-radius: 4px;
    height: 100px;
    border: none;
    padding: 0 4px;
    width: 100%;
    resize: none;
    box-shadow: 0px 5px 8px -1px rgba(0, 0, 0, 0.05);
    color: #0C1C30
    }
`
const Button = styled.button`
box-shadow: none; 
background: #ffffff;
color: #0C1C30;
border: 1px solid #eee;
display: flex;
padding: 12px 16px; 
border-radius: 8px;
cursor: pointer;
font-family: 'Raleway', sans-serif;
font-weight: bold;
box-shadow: 6px 24px 58px 0px rgba(85, 85, 85, 0.2);

`
const ContactWrapper = styled.section`
max-width: 800px;
margin: 40px auto; 
padding: 0 20px;
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
                </div>
                <div>
                </div>
                    
                <ContactWrapper>
               

                <Form name="contact-us"
                    method="POST"
                    data-netlify="true"
                    action="/contact-success">
                    <input type="hidden" name="form-name" value="contact-us" />
                    {props.data.prismic.allContact_pages.edges[0].node.form_fields.map((field, i) => {
                        if (field.field_type === 'textarea') {
                            return (
                                <div key={i}>
                                    <textarea
                                        name={field.field_name}
                                        required={field.required === 'Yes'}
                                        placeholder={field.field_name} />
                                </div>
                            );

                        } else {
                            return (
                                <div key={i}>
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

            </ContactWrapper>


            </div>

            </div> 
    )
}

export default ContactUs;