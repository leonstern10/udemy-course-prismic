import React from 'react';
import RichText from './richText';
import styled from 'styled-components';
import Navbar from './navBar';


const HeroWrapper = styled.section `
    background: url('${props => props.heroImage}');
    height: 50vh;
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: not repeat;
    position: relative;
    color: #FFFFFF;
    text-align: center;
    @media (min-width: 1024px ) {
        height: 60vh;
    }
    @media (min-width: 1330px ) {
        height: 70vh;
    }
    @media (min-width: 1730px ) {
        height: 80vh;
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
    padding: 0 3px;

    @media (min-width: 425px ) {
    margin-top: 0px;
    padding: 0 3px;

}
@media (min-width: 590px ) {
    font-size: 28px;
    margin-top: 15px;
}
@media (min-width: 768px ) {
    font-size: 28px;
    margin-top: 30px;
}
@media (min-width: 800px ) {
    font-size:32px;
    margin-top: 30px;
}
@media (min-width: 1024px ) {
    font-size:38px;
    margin-top: 30px;
}
@media (min-width: 1330px ) {
    font-size:44px;
    margin-top: 60px;
}
@media (min-width: 1920px ) {
    font-size:44px;
    margin-top: 120px;
    
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
            <div className="topnav">
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
