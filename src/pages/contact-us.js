import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout';
import styled from 'styled-components';


export const  query = graphql `
{
    prismic {
    allContact_pages {
      edges {
        node {
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
color: #fffff;
cursor: pointer 
padding: 16px 28px;
box-shadow: none; 
border-radius: 8px;

`

const ContactUs = (props) => {
    console.log(props);

    return(
        <Layout>
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
                    Submit
                </Button>

            </Form>
            
        </Layout>
    
    )
};

export default ContactUs;