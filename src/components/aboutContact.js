import React from 'react';
import RichText from './richText';
import styled from 'styled-components';
import { Link } from "gatsby";


const AboutWrapper = styled.section `
`


const AboutContact = ({aboutTitle, aboutContent, contacTitle, contactContent, buttonLabel, contactLink}) => {
    return(

        
        <div>
        <div>
        <RichText render={aboutTitle}/>
        </div>
        <div>
        <RichText render={aboutContent}/>
        </div>
        <div>
        
        <RichText render={contacTitle}/>
       
        </div>
        <div>
        <RichText render={contactContent}/>
        </div>
         <div>
        <Link to ={contactLink}>
            {buttonLabel}
        </Link>
        </div>
        
        
        </div>

    )
}




    export default AboutContact;