import React from 'react';
import { RichText } from 'prismic-reactjs';
import Rater from 'react-rater'
import styled from 'styled-components';
import { OutboundLink  } from 'gatsby-plugin-google-gtag'




const  LogoImage= styled.img`
background-image: url('${props => props.src}');
background-size: cover;
background-position: center;
background: no-repeat;
max-width: 151px;
max-height: 70px;
margin: auto 0;
@media (max-width: 390px) {
   max-width: 140px;
}
@media (max-width: 360px) {
    max-width: 130px;
 }

`;
const SmallTableBox = ({logoImage, numberRating, ratingStars, buttonText, webLink }) => {

    return(
        <div>
        <LogoImage src={logoImage}  />
        <div>
    <RichText render = {numberRating}/>
</div>
<div>
     <Rater rating={ratingStars} total={5}/>
     </div>
     <OutboundLink href={webLink} target="_blank" rel="noopener noreferrer" onClick= {() => typeof window !== "undefined" && window.gtag("event", "conversion", { send_to: ["AW-656248674/A0KMCKWZu88BEOKe9rgC"]})} >
        {buttonText}
    </OutboundLink>
</div>
    )
    }

    export default SmallTableBox;