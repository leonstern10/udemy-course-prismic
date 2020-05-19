import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'gatsby';
import styles from "../css/sidebox.module.css"
import styled from 'styled-components';



const  BackImage= styled.img`
background-image: url('${props => props.src}');
object-fit: cover;

`;

const SideBox = ({ title, articleImage, pageLink}) => {
    return (
        
        <div className={styles.box}>
            <div className={styles.wrap}>
            <Link to={pageLink} > 
            <BackImage src={articleImage} className={styles.articleImage}/>
            <div className={styles.text}>
               
                    <RichText render={title}>
                    <span className={styles.colorText}/>
                    </RichText>
                    
                    </div>
                    </Link>
                 
                    </div>
                     </div>
                    
                 
        
      
    )
}

export default SideBox;