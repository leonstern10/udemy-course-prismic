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
background: #eee;
margin-top: 20px;
max-width: 800px;
margin-left: auto ;
margin-right: auto ;
`
const Button = styled.button `
background: #8461C9;
color: #ffffff;
box-shadow: none; 
display: flex;
border-radius: 8px;
cursor: pointer;
font-family: 'Raleway', sans-serif;
font-weight: bold;

`

const ContactUs = (props) => {
    console.log(props);

    return(
        <Layout>
            <RichText render = {props.data.prismic.allContact_pages.edges[0].node.form_title}/>
            <RichText render = {props.data.prismic.allContact_pages.edges[0].node.form_description}/>

            <Form onSubmit={e => e.preventDefault()}>
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
            
        </Layout>
    
    )
};

export default ContactUs;