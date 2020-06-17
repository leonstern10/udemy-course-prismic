import React from 'react';
import { RichText } from 'prismic-reactjs';
import Rater from 'react-rater'
import styled from 'styled-components';
import { OutboundLink  } from 'gatsby-plugin-google-gtag'
import styles from "../css/smalltableBox.module.css";




const  LogoImage= styled.img`
background-image: url('${props => props.src}');
background-size: cover;
background-position: center;
background: no-repeat;
max-width: 111px;
max-height: 70px;
margin: auto 0;
@media (max-width: 390px) {
   max-width: 140px;
}
@media (max-width: 360px) {
    max-width: 130px;
 }

`;
const SmallTableBox = ({logoImage, numberRating, ratingStars, buttonText, webLink, rankNumber }) => {

    return(
        <OutboundLink href={webLink} target="_blank" rel="noopener noreferrer" onClick= {() => typeof window !== "undefined" && window.gtag("event", "conversion", { send_to: ["AW-656248674/A0KMCKWZu88BEOKe9rgC"]})} className={styles.boxLink} >
        <div className={styles.triangle}/>
        <div className={styles.rankNumber}>
        {rankNumber}
        </div>
        <div className={styles.box}>
        <LogoImage src={logoImage}  />
        <div className = {styles.cta}>
        {buttonText}
        </div>
        <div className={styles.rating}>
        <div className={styles.number}>
        <RichText render = {numberRating}/>
        </div>
        <div className={styles.stars}>
        <Rater rating={ratingStars} total={5}/>
        </div>
        </div>
       

</div>
</OutboundLink>
    )
    }

    export default SmallTableBox;