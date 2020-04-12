import React from 'react';
import Hero from './hero';
import ListsGrid from './listsGrid';
import PostGrid  from './postGrid';
import ComparisonGrid  from './comparisonGrid';


const SliceZone = ({body}) => {
    console.log(body);
        return (
            <div>
                {body.map((bodyContent, i ) => {
                    if(bodyContent.type === 'hero'){
                        return (
                            <Hero
                            heroImage = {bodyContent.primary.hero_image.url}
                            title = {bodyContent.primary.hero_title}
                            content={bodyContent.primary.hero_content}
                            key={i}/>
                        )
                        
                    }    else if (bodyContent.type ==='post_grid'){
                        return ( 
                                    <PostGrid 
                                    key={i}
                                    posts={bodyContent.fields} 
                                    title={bodyContent.primary.products_title}/>
                                   
                        )
                    }
                                else if (bodyContent.type ==='lists_grid'){
                        return ( 
                                    <ListsGrid 
                                    key={i}
                                    lists={bodyContent.fields}
                                    title={bodyContent.primary.list_title} />
                        )
                    }
                    else if (bodyContent.type ==='comparison_grid'){
                        return ( 
                                    <ComparisonGrid 
                                    key={i}
                                    comparisons={bodyContent.fields}/>
                        )
                    }

                     else {
                        return null
                    }
                } )}
            </div>
        )

};

export default SliceZone