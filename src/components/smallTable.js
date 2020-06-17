import React from 'react';
import RichText from './richText';
import SmallTableBox from './smalltableBox';
import styled from 'styled-components';
import styles from "../css/smalltable.module.css";



const SmallTable = ({smalltables}) => {
    return (
 <div className={styles.wrapper}>
{smalltables.map((smalltable,i) => {
                return (
                    <SmallTableBox 
                    logoImage={smalltable.logo_image.url}
                    numberRating={smalltable.number_rating}
                    ratingStars={smalltable.rating_stars}
                    buttonText={smalltable.button_text}
                    webLink={smalltable.web_link.url}
                    rankNumber={smalltable.rank_number}
                    key={i}/>
                    )
                })}
        </div>
    )
}

export default SmallTable;
