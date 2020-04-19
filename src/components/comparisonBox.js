import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Link } from 'gatsby';
import styles from "../css/comparisonbox.module.css";
import {FaAngleDown} from 'react-icons/fa';


const  BackgroundLogo= styled.img`
background-image: url('${props => props.src}');
background-size: cover;
background-position: center;
width: auto;
height: 42px;
`;
const ComparisonBoxWrapper = styled.section`
max-width: 1220px;
box-sizing: border-box
border-bottom: 1px solid #CACACA;
.comparison-content {
    display: flex; 
    flex-direction: row;      
    margin: auto 0;
    padding: 0 15px;
}`


const ComparisonBox = ({popularTag, features, price, readMore, serviceDescription, serviceLogo, webLabel, webLink }) => {

const [showContent, setContent]= useState(false)
const toggleContent = () => {
    setContent(showContent => !showContent)
}
    return(
    <div className= {styles.wrapper}>
    <div className= {styles.comparisonContent}>
    <p>
         {popularTag}
     </p>
     < BackgroundLogo src={serviceLogo} className={styles.image} />
    
     <div className={styles.features}>
     <RichText render={features} /> 
     </div>
     <div className= {styles.price}>
     <p>
         {price}
     </p>   
     </div>
     
     <div>
     <a href={webLink} target="_blank" >
        {webLabel}
    </a>
     </div>
     </div>
        <button className= {styles.readMore} onClick={toggleContent} > 
         {readMore}
         <FaAngleDown/>
         </button>
     {showContent &&
     <div className={styles.content}>
     <RichText render={serviceDescription} />    
     </div>}
    
   </div>
)
}

export default ComparisonBox;