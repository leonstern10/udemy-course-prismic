import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import styles from "../css/comparisonbox.module.css";
import {FaAngleDown} from 'react-icons/fa';


const  BackgroundLogo= styled.img`
background-image: url('${props => props.src}');
background-size: cover;
background-position: center;
background: no-repeat;
max-width: 131px;
max-height: 60px;
margin: 14px 0;
@media (max-width: 390px) {
   width: 90px;
}

`;


const ComparisonBox = ({popularTag, features, price, readMore, serviceDescription, serviceLogo, webLabel, webLink, bestFor, listPrice }) => {

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
    <div>
    <div className={styles.imageWrap}>
   
     < BackgroundLogo src={serviceLogo}  />
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
     <a href={webLink} target="_blank" rel="noopener noreferrer" >
        {webLabel}
    </a>
     </div>
     </div>
     </div>
     <div>
     <div className={styles.features}>
     <RichText render={features} /> 
     </div>
     
        <div className= {styles.readMore} onClick={toggleContent} > 
        <button>
         {readMore}
         <FaAngleDown className={styles.arrow}/>
         </button>
         </div>
        
     {showContent &&
     <div className={styles.content}>
     <RichText render={serviceDescription} />    
     </div>}
     </div>
    
   </div>
)
}

export default ComparisonBox;