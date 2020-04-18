import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'gatsby';
import styles from "../css/listbox.module.css"
import styled from 'styled-components';



const  BackgroundImage= styled.img`
background-image: url('${props => props.img}');
background-size: cover;
background-position: center;

`

const ListBox = ({ title, buttonLabel, buttonDestination, listImage }) => {
    return (
        
        <div className={styles.card}>
            <BackgroundImage img={listImage} className={styles.image}/>
                            
                <div className="container">
                    <RichText render={title} />
                     </div>
                    <div>
                        <button>
                            <Link to={buttonDestination}>
                                {buttonLabel}
                            </Link>
                        </button>
                    </div>
        </div>
      
    )
}

export default ListBox;