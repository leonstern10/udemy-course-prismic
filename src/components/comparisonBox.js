import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import styles from "../css/comparisonbox.module.css";
import {FaAngleDown} from 'react-icons/fa';
import { trackCustomEvent, OutboundLink  } from 'gatsby-plugin-google-gtag'
import Rater from 'react-rater'
import "../css/star.scss"




const  BackgroundLogo= styled.img`
background-image: url('${props => props.src}');
background-size: cover;
background-position: center;
background: no-repeat;
max-width: 151px;
max-height: 70px;
margin: auto 0;
@media (max-width: 390px) {
   width: 110px;
}

`;


const ComparisonBox = ({popularTag, features, ratingNumber,ratingStar, price, readMore, serviceDescription, serviceLogo, webLabel, webLink, bestFor, listPrice }) => {
  
const [showContent, setContent]= useState(false)
const toggleContent = () => {
    setContent(showContent => !showContent)
}

    return(
    <div className= {styles.wrapper}>
    
    <div className={styles.popularTag}>
         {popularTag}
    </div>
    <div className= {styles.comparisonContent}>
    <div className= {styles.imageBox}>
    <div className={styles.imageWrap}>
     <BackgroundLogo src={serviceLogo}  />
     </div>
    <p className={styles.bestFor}>
    {bestFor}
    </p>
    </div>
    <div className={styles.listPrice}>
    <RichText render={listPrice}  />
    </div>
    <div className={styles.rightWrapper}>
     <div className= {styles.price}>
     <p>
         {price}
     </p>   
     </div>
     <div className={styles.cta}>
     <OutboundLink href={webLink} target="_blank" rel="noopener noreferrer" onClick= {() => window.gtag("event", "conversion", { send_to: ["AW-656248674/A0KMCKWZu88BEOKe9rgC"]})} >
        {webLabel}
    </OutboundLink>
     </div>
     </div>
     </div>
     <div>
    <div className ={styles.middleSection}>
     <div className={styles.features}>
     <RichText render={features} /> 
     </div>
     <div className={styles.ratingWrap}>
     <div className ={styles.ratingNumber}>
     {ratingNumber}
     </div>
     <div className={styles.reactRaterStar}>
     <Rater rating={ratingStar} total={5}/>
     </div>
     </div>
     </div>
     
        <div className= {styles.readMore} onClick={toggleContent}  onKeyDown={toggleContent}> 
        <button onClick={e => {
        // To stop the page reloading
        e.preventDefault()
        // Lets track that custom click
        trackCustomEvent({
          // string - required - The object that was interacted with (e.g.video)
          category: "Leer Mas",
          // string - required - Type of interaction (e.g. 'play')
          action: "Click",
          // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
        //   label: "Gatsby Plugin Example Campaign",
          // number - optional - Numeric value associated with the event. (e.g. A product ID)
        //   value: 43
        })
        
      }}>
         {readMore}
         <FaAngleDown className={styles.arrow}/>
         </button>
         </div>
        
     {showContent &&
     <div className={styles.content}>
     <RichText render={serviceDescription} />  
     <div className={styles.bottomBox}>
     <div className={styles.bottomLogo}>
     <BackgroundLogo src={serviceLogo}  />
     </div>
     <div className={styles.longCta}>
     <OutboundLink href={webLink} target="_blank" rel="noopener noreferrer" >
        {webLabel}
    </OutboundLink>
    </div>
    </div>
     </div>}
     </div>
    
    
   </div>
)
}

export default ComparisonBox;