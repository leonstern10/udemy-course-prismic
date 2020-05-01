import React from 'react';
import { RichText } from 'prismic-reactjs';
import styles from "../css/faqBox.module.css";

const FaqBox = ({question, answer}) => {
return(
    <div className = {styles.sections}>

    
<div className={styles.question}>
    <RichText render = {question}/>
</div>
<div>
    <RichText render = {answer}/>
</div>
</div>
)

}


export default FaqBox;