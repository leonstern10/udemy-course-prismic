import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';


const PostBoxWrapper = styled.section`
     margin-top: 50px;
    .content-wrapper{
        max-width: 560px;
        margin: 0 auto;
        
    }
    .description-wrapper{
        margin-bottom: 2rem;
        font-size: 18px;
    }

        .image-wrapper{
            margin-bottom: 60px;
            max-width: 560px;
        }
    
    `

    const Button = styled.div` 
        max-width: 1000px;
        
       

        
        
    a {
    background: #8461C9;
    margin: 0 auto;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
        border-radius: 8px;
        padding: 12px;
       max-width: 560px;
        color: white; 
        display: flex;
        text-decoration: none;
        text-align: center;
        justify-content: center;
    }
        `
        const Line =styled.div `
        margin-top: 50px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        max-width: 560px;
        border-bottom: 1px solid #CACACA;

        `




const PostBox =({  productImage, productName, productDescription, buttonLabel, productLink }) => {

    return (
        <PostBoxWrapper>
        <div className="content-wrapper">
        <RichText render={productName} />
        <div className="description-wrapper">
        <RichText render={productDescription} />
        </div>
        <div className="image-wrapper">
        <img src={productImage} alt="post" />
        </div>
        <Button>
         <a href={productLink} target="_blank"  rel="noopener noreferrer">
           {buttonLabel}
         </a>
        </Button>
        </div>
        <div>
            <Line></Line>
        </div>
        
        </PostBoxWrapper>
    )}

    export default PostBox;
