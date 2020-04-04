import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout';
import styled from 'styled-components';
import RichText from '../components/richText'


export const  query = graphql `
{
    prismic {
    allContact_pages {
      edges {
        node {
            form_title
            form_description
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
const Form = styled.form `
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
const Button = styled.button `
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
const ContactWrapper = styled.section `
max-width: 800px;
margin: 40px auto; 
padding: 0 20px;
`
const ContactUs = (props) => {
    console.log(props);

    return(
        <Layout>
            <ContactWrapper>

            <RichText render = {props.data.prismic.allContact_pages.edges[0].node.form_title}/>
            <RichText render = {props.data.prismic.allContact_pages.edges[0].node.form_description}/>

            <Form name="contact-us"
                  method ="POST"
                  data-netlify= "true"  
                  action="/contact-success"
                <input type="hidden" name ="form-name" value="contact-us"/>
                {props.data.prismic.allContact_pages.edges[0].node.form_fields.map((field, i) => {
                   if(field.field_type === 'textarea'){
                       return (
                           <div key={i}>
                               <textarea 
                               required = {field.required ==='Yes'}
                               placeholder={field.field_name}/>
                           </div>
                       );

                   }else {
                       return(
                           <div key={i}>
                           <input 
                           placeholder={field.field_name}
                           required = {field.required ==='Yes'}
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
           
            
        </Layout>
    
    )
};

export default ContactUs;