import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'gatsby';
import styles from "../css/listbox.module.css"
import styled from 'styled-components';



const  BackgroundImage= styled.img`
background-image: url('${props => props.img}');
background-size: cover;
background-position: center;

`;

const ListBox = ({ title, buttonDestination, listImage, color }) => {
    return (
        
        <div className={styles.card}>
            <div className={styles.container}>
            <Link to={buttonDestination} > 
            <BackgroundImage img={listImage} className={styles.image}/>
            <div className={styles.text}>
               
                    <RichText render={title}>
                    <span className={styles.colorText} style= "color:#FF9960"/>
                    </RichText>
                    
                    </div>
                    </Link>
                 
                    </div>
                     </div>
                    
                 
        
      
    )
}

export default ListBox;