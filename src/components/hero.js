import React from 'react';
import RichText from './richText';
import styled from 'styled-components';
import Navbar from './navBar';
import styles from "../css/hero.module.css"

const HeroWrapper = styled.section `
    background: url('${props => props.heroImage}');
    height: 60vh;
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: not repeat;
    position: relative;
    color: #FFFFFF;
    text-align: center;
    @media (min-width: 1024px ) {
        height: 90vh;
    }
 
   .container{
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    width: auto;
    @media (min-width: 576px ) {
       width: 100%;
   
    }
    

   }
   .topnav {
    overflow: hidden; 
}
.title {
    font-size: 24px;
    margin-top: 30px;
    @media (min-width: 425px ) {
    margin-top: 40px;
}
@media (min-width: 590px ) {
    font-size: 28px;
    margin-top: 50px;
}
@media (min-width: 768px ) {
    font-size: 28px;
    margin-top: 60px;
}
@media (min-width: 800px ) {
    font-size:32px;
    margin-top: 70px;
}
@media (min-width: 1024px ) {
    font-size:42px;
    margin-top: 160px;
}
@media (min-width: 1440px ) {
    font-size:44px;
    
}
}
.subtitle {
    font-size: 24px;
}



`


const Hero = ({title, content, heroImage}) => {
    return(
        
        <HeroWrapper heroImage={heroImage}>
            <div className ="container">
            <div class="topnav">
            <Navbar/>
            </div>
          <div className="title">
          <RichText render={title}/>
          </div>
          <p className ="subtitle">
               {content}
           </p>
          
          </div>        
        </HeroWrapper>
    );
}

export default Hero;
