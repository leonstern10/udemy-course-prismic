import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';



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
background:${p => p.popularTag ? '#D9B26F' : 'white'} ;
color: white;
font-familiy: 'Raleway', sans-serif;
width: 155px;
height: 19px;
`;



const ComparisonBox = (popularTag, features, price, readMore, serviceDescription, serviceLogo, webLabel, webLink ) => {
return(
    <ComparisonBoxWrapper>
    <div className= "comparison-content">
         
    <div className="logo-wrapper">
     <img src={serviceLogo} alt="logo" />
     </div>
     <RichText render={serviceDescription} />
   

     <PopularTag popularTag = {popularTag}>
     <p>
         #1 Mas popular
     </p>
     </PopularTag>
   

   
    
   </div>
   </ComparisonBoxWrapper>
)
}

export default ComparisonBox;