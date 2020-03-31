import React from 'react';
import styled from 'styled-components';
import RichText from './richText';


const PostGridWrapper = styled.section `
max-width: 1220px;
margin: 50px auto; 

.products-title{
    padding-bottom: 0;
    border-bottom: 1px solid #CACACA;
}
`
const PostGrid = ({title}) => {
return (
    <PostGridWrapper>
    <div className="products-title">
        <RichText render= {title}/>
    </div>
    </PostGridWrapper>

)

}

export default PostGrid;
