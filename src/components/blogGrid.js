import React from 'react';
import RichText from './richText';
import BlogBox from './blogBox';



const BlogGrid = ({sections, title}) => {
    return (
        <div>
            <div>
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