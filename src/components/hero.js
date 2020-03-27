import React from 'react';
import {RichText} from 'prismic-reactjs';
import styled from 'styled-components';

const HeroWrapper = styled.section `
    background: url('${props => props.heroImage}');
    height: 60vh;
    background-size: cover;
    background-repeat: not repeat;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    text-align: center;
    

    div{
        max width: 800px;
        margin: 0 auto;
        font-size: 24px;
        font-family: 'Lato', sans-serif;
        
    }
    h1{
        font-family: 'Raleway', sans-serif;
        font-size: 56px;
   }

`


const Hero = ({title, content, heroImage}) => {
    return(
        <HeroWrapper heroImage={heroImage}>
          <div>
          <RichText render={title}/>
          <p>
               {content}
           </p>
          </div>
           
        
        </HeroWrapper>
    );
}

export default Hero;
