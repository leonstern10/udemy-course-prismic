import React from 'react';
import RichText from './richText';
import styled from 'styled-components';
import { Link } from "gatsby";
import styles from "../css/aboutContact.module.css"


const AboutWrapper = styled.section `
`


const AboutContact = ({aboutTitle, aboutContent, contacTitle, contactContent, buttonLabel, contactLink}) => {
    return(

        
        <div className={styles.contain}>
            <hr className={styles.line}/>
        <div className={styles.aboutWrapper}>
        <div>
        <RichText render={aboutTitle}/>
        </div>
        <div className={styles.aboutContent}>
        <RichText render={aboutContent}/>
        </div>
        </div>
        <div>
        <div className= {styles.contactWrap}>
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
        
         
        </div>
        
        </div>

    )
}




    export default AboutContact;