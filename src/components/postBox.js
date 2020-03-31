import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PostBoxWrapper = styled.section`
    padding: 40px 0;
    `

    const Button = styled.div` 
        
    a {
    background: #8461C9;`




const PostBox =({  productImage, productName, productDescription, buttonLabel, productLink }) => {

    return (
        <PostBoxWrapper>
        <RichText render={productName} />
        <RichText render={productDescription} />
        <img src={productImage} alt="post" />
        <Button>
         <a href={productLink}>
           {buttonLabel}
         </a>
        </Button>
        </PostBoxWrapper>
    )}

    export default PostBox;
