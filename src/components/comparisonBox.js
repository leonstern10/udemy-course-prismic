import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Link } from 'gatsby';



const ComparisonBoxWrapper = styled.section`
border-top: 1px solid #CACACA;
border-bottom: 1px solid #CACACA;
.comparison-content {
    display: flex;       
    margin: auto 0;
    padding: 0 15px;
    .features{
            align-self: center;
            display: block;
            flex-direction: column;
            max-width: 760px;
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



`;
const PopularTag =styled.section`
background: #D9B26F;
color: white;
font-familiy: 'Raleway', sans-serif;
width: 155px;
height: 19px;
`;

const Button = styled.div` `


const ComparisonBox = ({popularTag, features, price, readMore, serviceDescription, serviceLogo, webLabel, webLink }) => {
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
     <RichText render={features} />  
     <p>
         {price}
     </p>   
     <p>
         {readMore}
     </p>
     <Button>
     <Link to={webLink}>
        {webLabel}
    </Link>
     </Button>
    
     
     <RichText render={serviceDescription} />    

    
   </div>
   </ComparisonBoxWrapper>
)
}

export default ComparisonBox;