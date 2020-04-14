import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {FaAngleDown} from 'react-icons/fa';


const ComparisonBoxWrapper = styled.section`
max-width: 1220px;
box-sizing: border-box
border-top: 1px solid #CACACA;
border-bottom: 1px solid #CACACA;
.comparison-content {
    display: flex; 
    flex-direction: row;      
    margin: auto 0;
    padding: 0 15px;
}
    .features{
          
    }
    .logo-wrapper{
        display: block;
            height: auto;        
            img {
                position: center;
                width: 100%
                height: 100%
                margin: auto 0; 
            }
    }
    .readmore{
        margin: auto 0;
    }
    .content{
        margin: auto 0;
    }
   



`;
const PopularTag =styled.section`
background: #D9B26F;
color: white;
font-familiy: 'Raleway', sans-serif;
width: 155px;
height: 19px;
`;

const Button = styled.div`
a {
    background: #8461C9;
    cursor: pointer;
    float: left;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
        border-radius: 8px;
        padding: 12px 24px;
        color: white; 
        display: inline-block;
        text-decoration: none;
        text-align: center;
        font-size: 16px;   
        &:hover{
            background: #1D0276;
        }
    }
`; 


const ComparisonBox = ({popularTag, features, price, readMore, serviceDescription, serviceLogo, webLabel, webLink }) => {

const [showContent, setContent]= useState(false)
const toggleContent = () => {
    setContent(showContent => !showContent)
}
    return(
    <ComparisonBoxWrapper>
    <div className= "comparison-content">
    <p>
     <PopularTag>
         {popularTag}
         <div className="logo-wrapper">
     <img src={serviceLogo} alt="logo" />
     </div>
     </PopularTag>
     </p>
     <div className="features">
     <RichText render={features} /> 
     </div>
     <div className= "price">
     <p>
         {price}
     </p>   
     </div>
     
     <Button>
     <a href={webLink} target="_blank" >
        {webLabel}
    </a>
     </Button>
     </div>
        <button className= "readmore" onClick={toggleContent} > 
         {readMore}
         <FaAngleDown/>
         </button>
     {showContent &&
     <div className="content">
     <RichText render={serviceDescription} />    
     </div>}
    
   </ComparisonBoxWrapper>
)
}

export default ComparisonBox;