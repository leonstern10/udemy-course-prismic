import React from 'react';
// import { RichText } from 'prismic-reactjs';
// import Rater from 'react-rater'
import styled from 'styled-components';



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
        <LogoImage src={logoImage}  />

    )
    }

    export default SmallTableBox;