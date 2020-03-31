import React from 'react';
import styled from 'styled-components';
import RichText from './richText';
import PostBox from './postBox';


const PostGridWrapper = styled.section `
max-width: 1220px;
margin: 50px auto; 

.products-title{
    padding-bottom: 0;
    border-bottom: 1px solid #CACACA;
}
`
const PostGrid = ({title, posts}) => {
return (
    <PostGridWrapper>
    <div className="products-title">
        <RichText render= {title}/>
    </div>
    {posts.map((post,i) => {
                return (
                    <PostBox 
                    productImage= {post.product_image.url}
                    productName={post.product_name}
                    productDescription={post.product_description}
                    buttonLabel={post.button_label}
                    productLink={post.product_link.url}
                    key={i}/>

                )
    })}

    </PostGridWrapper>
)

}

export default PostGrid;