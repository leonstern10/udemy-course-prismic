import React from 'react';
import { RichText } from 'prismic-reactjs';

const BlogBox = ({sectionTitle, sectionContent}) => {
return(
    
<div>  
<div>
    <RichText render = {sectionTitle}/>
</div>
<div>
    <RichText render = {sectionContent}/>
</div>
</div>
)

}


export default BlogBox;