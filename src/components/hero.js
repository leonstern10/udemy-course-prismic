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
    font-size: 26px;
    margin-top: 40px;
    @media (min-width: 425px ) {
    margin-top: 70px;
}
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
          <p>
               {content}
           </p>
          </div>
          </div>        
        </HeroWrapper>
    );
}

export default Hero;
