import React from 'react';
import { RichText } from './richText';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PostBoxWrapper = styled.section`
    padding: 40px 0;
    `






const PostBox = ({  productImage, productName, productDescription, buttonLabel, productLink }) => {

    return (
        <PostBoxWrapper>
        <RichText render={productName} />
        <RichText render={productDescription} />
        <img src={productImage} alt="" />
        <Button>
                            <Link to={productLink}>
                                {buttonLabel}
                            </Link>
                        </Button>
                        </PostBoxWrapper>
    )}

    export default PostBox;