import React from 'react';
import { RichText } from 'prismic-reactjs';
import styles from "../css/blogBox.module.css";

const BlogBox = ({sectionTitle, sectionContent}) => {
return(
    
<div className={styles.wrapper}>  
<div className ={styles.box}>
    <div>
    <RichText render = {sectionTitle}/>
</div>
<div className={styles.content}>
    <RichText render = {sectionContent}/>
</div>
</div>

</div>
)

}


export default BlogBox;