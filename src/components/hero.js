import React from 'react';
import RichText from './richText';
import styled from 'styled-components';
import Navbar from './navBar';

const HeroWrapper = styled.section `
    background: url('${props => props.heroImage}');
    height: 60vh;
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: not repeat;
    position: relative;
    align-items: center;
    color: #FFFFFF;
    text-align: center;
        
    }
 
   .container{
    
    position: absolute;
    top: 40px;
    left: 40px;
    width: auto;
    margin: 20px;
    

   }
   .topnav {
    overflow: hidden; 
   }0
    .topnav a {

    float: right;
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
          <div>
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
