import React from 'react';
import { RichText } from 'prismic-reactjs';
import styles from "../css/sidetablebox.module.css"
import styled from 'styled-components';
import { OutboundLink  } from 'gatsby-plugin-google-gtag'
import {AiFillRightCircle} from 'react-icons/ai';




const  LogoImage= styled.img`
background-image: url('${props => props.src}');
background-size: cover;
background-position: center;
background: no-repeat;
max-width: 80px;
max-height: 70px;
margin: auto 0;
@media (max-width: 390px) {
   max-width: 140px;
}
@media (max-width: 360px) {
    max-width: 130px;
 }

`;

const SideTableBox = ({logoImage, ratingNumber, ranking, webLink}) => {
    return (
         <OutboundLink href={webLink} target="_blank" rel="noopener noreferrer" onClick= {() => typeof window !== "undefined" && window.gtag("event", "conversion", { send_to: ["AW-656248674/A0KMCKWZu88BEOKe9rgC"]})} className={styles.boxLink}>   
         <div className={styles.triangle}/>
        <div className={styles.rankNumber}>
        {ranking}
        </div>
            <div className={styles.box}>
            <div className={styles.wrap}>
            <LogoImage src={logoImage} className={styles.logoImage}/>
            <div className={styles.number}>
             <RichText render={ratingNumber}/>                    
             </div>
            <AiFillRightCircle className={styles.arrow}/>
            </div>
            </div>
             </OutboundLink>
                 
             
            

    )
}

export default SideTableBox;