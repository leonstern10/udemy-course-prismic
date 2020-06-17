import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'gatsby';
import styles from "../css/listbox.module.css"
import styled from 'styled-components';



const  BackgroundImage= styled.img`
background-image: url('${props => props.src}');
object-fit: cover;

`;

const ListBox = ({ title, buttonDestination, listImage, color, Alt }) => {
    return (
        
        <div className={styles.card}>
            <div className={styles.container}>
            <Link to={buttonDestination} > 
            <BackgroundImage src={listImage} alt ={Alt} className={styles.image}/>
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

export default ListBox;