import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import styles from "../css/comparisonbox.module.css";
import {IoIosArrowDown} from 'react-icons/io';
import { OutboundLink  } from 'gatsby-plugin-google-gtag'
import Rater from 'react-rater'
import "../css/star.scss";
import Slide from "react-reveal";




const  BackgroundLogo= styled.img`
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

const  Populartag= styled.div `
display: ${p => p.popularTag ? 'flex' : 'none'};

.popular-tag{
background:#FFAD80;
display: flex;
align-items: center;
width: 160px;
height: 28px;
color: white;
padding: 0.6rem 1.25rem;
font-family: "Raleway", sans-serif;
font-size: 16px;
font-weight: 600;
justify-content: center; 


}
`;


const ComparisonBox = ({name, popularTag, numberRank, features, ratingNumber,ratingStar, price, readMore, serviceDescription, serviceLogo, webLabel, webLink, bestFor, listPrice }) => {
    
const [showContent, setContent]= useState(false)
const toggleContent = () => {
    setContent(showContent => !showContent)
}



    return(
        <div className={styles.allcontent}>
         
            <OutboundLink href={webLink} target="_blank" rel="noopener noreferrer" onClick= {() => window.gtag("event", "conversion", { send_to: ["AW-656248674/A0KMCKWZu88BEOKe9rgC"]})} >
            <div className= {styles.tagwrap}>
    <Populartag popularTag={popularTag}>
        {!!popularTag &&
        <div className="popular-tag">
            Más Popular
            </div>
            }
        </Populartag>
        </div>
    <div className= {styles.wrapper}>
    
     <div className= {styles.leftMiddle}>  
    <div className= {styles.leftContent}>
       
        
    <div className= {styles.titleWrap}>
    <p className={styles.numberRank}>
    {numberRank} 
    <div className={styles.logoMobile}>
     <BackgroundLogo src={serviceLogo}  />
     </div> 
    </p>
    <div className= {styles.titleFeatures}>
    <div className= {styles.titleBox}>
    <div className={styles.name}>
    <RichText render={name} /> 
    </div>
    
    <p className={styles.bestFor}>
    {bestFor}
    <hr className={styles.line}></hr>
    </p>
    
    </div>
    <div className={styles.features}>
     <RichText render={features} /> 
     </div>
    
    </div>
     </div>
     </div>
     <div className ={styles.rightSection}>
     <div className={styles.ratingWrap}>
     <div className ={styles.ratingNumber}>
     {ratingNumber}
     </div>
     <div className={styles.reactRaterStar}>
     <Rater rating={ratingStar} total={5}/>
     </div>
     <div className={styles.listPrice}>
    <RichText render={listPrice}  />
    </div>
     </div>
     <div className ={styles.bestMobile}>
     {bestFor}
     </div>
    <div className={styles.rightWrapper}>
     <div className= {styles.price}>
     <p>
         {price}
     </p>   
     </div>
     <div className={styles.featuresMobile}>
     <RichText render={features} /> 
     </div>
 
     <hr className={styles.lineMobile}></hr>
     
     
     <div className={styles.cta}>
     <OutboundLink href={webLink} target="_blank" rel="noopener noreferrer" onClick= {() => typeof window !== "undefined" && window.gtag("event", "conversion", { send_to: ["AW-656248674/A0KMCKWZu88BEOKe9rgC"]})} >
        {webLabel}
    </OutboundLink>
     </div>
     <div className={styles.imageWrap}>
     <BackgroundLogo src={serviceLogo}/>
     </div>
     </div>
     </div>
     </div> 

     </div>
    <Slide collapse when={showContent} >

     <div className={styles.content}>
     <RichText render={serviceDescription} />  
     
     
     
     <div className={styles.longCta}>
     <OutboundLink href={webLink} target="_blank" rel="noopener noreferrer" onClick= {() => typeof window !== "undefined" && window.gtag("event", "conversion", { send_to: ["AW-656248674/A0KMCKWZu88BEOKe9rgC"]})} >
        {webLabel}
    </OutboundLink>
    </div>
    
     </div>
     </Slide>

     </OutboundLink> 

        <div className= {styles.readMore} onClick={toggleContent}  onKeyDown={toggleContent}>
        <div onClick= {() => window.gtag("event", "click", {send_to: ["UA-163219293-1"]})}>
         <IoIosArrowDown className={`${styles.arrow} ${showContent && styles.up}`} />
         </div>
         </div>
        </div>
)}

export default ComparisonBox;