import React from 'react';
import RichText from './richText';
import { Link } from "gatsby";
import styles from "../css/aboutContact.module.css"





const AboutContact = ({aboutTitle, aboutContent, contacTitle, contactContent, buttonLabel, contactLink}) => {
    return(
        <div className={styles.allWrap}>
        <hr className={styles.line}/>
        <div className={styles.contain}>
            
        <div className={styles.aboutWrapper}>
        <div className={styles.aboutTitle}>
        <RichText render={aboutTitle}/>
        </div>
        <div className={styles.aboutContent}>
        <RichText render={aboutContent}/>
        </div>
        </div>
        <div>
        <div className= {styles.contactWrap}>
            <div className= {styles.contentWrap}>
            <div className={styles.contacTitle}>
        <RichText render={contacTitle}/>
        </div>
        <div className={styles.contactContent}>
        <RichText render={contactContent}/>
        </div>
        <div className={styles.contactButton}>
        <Link to ={contactLink}>
            {buttonLabel}
        </Link>
        </div>
        </div>
        </div>
         
        </div>
        
        </div>
        </div>
    )
}




    export default AboutContact;