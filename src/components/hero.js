import React from 'react';
import RichText from './richText';
import styled from 'styled-components';
import Navbar from './navBar';
import styles from "../css/hero.module.css";


const HeroWrapper = styled.section `
    background: url('${props => props.heroImage}');
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: not repeat;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 1024px ) {
        height: 60vh;
    }
    @media (min-width: 1330px ) {
        height: 80vh;
    }
    @media (min-width: 1730px ) {
        height: 80vh;
    }
   
`


const Hero = ({title, content, heroImage}) => {
    return(
        
        <HeroWrapper heroImage={heroImage}>
            
            <div className={styles.navbar}>
            <Navbar/>
            </div>
            <div className={styles.textContainer}>
          <div className={styles.title}>
          <RichText render={title}/>
          </div>
          <p className ={styles.subtitle}>
               {content}
           </p>
           </div>
           <div className={styles.bottom}></div>
          
         
              
        </HeroWrapper>
    );
}

export default Hero;
