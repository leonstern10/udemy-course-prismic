import React from 'react';
import styled from 'styled-components';
import RichText from './richText';
import styles from "../css/faqGrid.module.css";
import FaqBox from './faqBox';



const FaqGrid = ({faqs, title}) => {
    return (
        <div className={styles.wrapper}>
            <div className ={styles.title}>
         <RichText render={title}/>
         </div>
         <div className={styles.container}>
        {faqs.map((faq,i) => {
        return (
            <FaqBox 
           question= {faq.question}
            answer={faq.answer}
            key={i}/>
                
           
        )
    })}
</div>
</div>
    )
}

    export default FaqGrid;