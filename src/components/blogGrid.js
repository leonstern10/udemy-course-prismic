import React from 'react';
import RichText from './richText';
import BlogBox from './blogBox';
import styles from "../css/blogGrid.module.css";


const BlogGrid = ({sections, title}) => {
    return (
        <div className={styles.wrapper}>
        <div className ={styles.title}>
         <RichText render={title}/>
         </div>
         <div>
        {sections.map((section,i) => {
        return (
            <BlogBox 
           sectionTitle= {section.section_title}
            sectionContent={section.section_content}
            key={i}/>
        )
    })}
</div>
</div>
    )
}

    export default BlogGrid;