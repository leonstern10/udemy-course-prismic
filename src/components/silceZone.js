import React from 'react';
import Hero from './hero';
import ListsGrid from './listsGrid';
import PostGrid  from './postGrid';
import ComparisonGrid  from './comparisonGrid';
import AboutContact from './aboutContact';
import FaqGrid  from './faqGrid';
import Sidebar  from './sidebar';
import styles from "../css/sliceZone.module.css";
import BlogGrid  from './blogGrid';
import SmallTable  from './smallTable';
import SideTable  from './sideTable';





const SliceZone = ({body}) => {
    console.log(body);
        return (
            <div className={styles.SliceZone}>
                {body.map((bodyContent, i ) => {
                    if(bodyContent.type ==='comparison_grid'){
                        return ( 
                            
                                    <ComparisonGrid 
                                    key={i}
                                    comparisons={bodyContent.fields}/>
                        )
                    }else if (bodyContent.type ==='sidebar'){
                        return ( 
                                    <Sidebar 
                                    key={i}
                                    sides={bodyContent.fields}
                                    title={bodyContent.primary.sidebar_title} />
                        )
                    }else if (bodyContent.type ==='faq'){
                        return ( 
                                    <FaqGrid 
                                    key={i}
                                    faqs={bodyContent.fields}
                                    title={bodyContent.primary.faq_title} />
                        )
                    }else if (bodyContent.type ==='blog_content'){
                        return ( 
                                    <BlogGrid 
                                    key={i}
                                    sections={bodyContent.fields}
                                    title={bodyContent.primary.intro_title} />
                        )
                    }else if (bodyContent.type ==='sidetable'){
                        return ( 
                                    <SideTable 
                                    key={i}
                                    sidetables={bodyContent.fields}
                                    title={bodyContent.primary.sidetable_title}
                                    buttonLabel={bodyContent.primary.button_label}
                                    compareAll={bodyContent.primary.compare_all._meta.uid} />
                        )
                    }else if (bodyContent.type ==='small_table'){
                        return ( 
                                    <SmallTable 
                                    key={i}
                                    smalltables={bodyContent.fields}
                                    />
                        )
                    
                    }else if (bodyContent.type ==='about___contact'){
                        return ( 
                                    <AboutContact 
                                    aboutTitle = {bodyContent.primary.about_title}
                                    aboutContent={bodyContent.primary.about_content}
                                    contacTitle={bodyContent.primary.contact_titulo}
                                    contactContent={bodyContent.primary.contact_content}
                                    buttonLabel={bodyContent.primary.button_label}
                                    contactLink={bodyContent.primary.contact_link._meta.uid}
                                    key={i}/>
                        )
                    } else if (bodyContent.type ==='post_grid'){
                        return ( 
                                    <PostGrid 
                                    key={i}
                                    posts={bodyContent.fields} 
                                    title={bodyContent.primary.products_title}/>
                        )
                    }else if (bodyContent.type ==='lists_grid'){
                        return ( 
                                    <ListsGrid 
                                    key={i}
                                    lists={bodyContent.fields}
                                    title={bodyContent.primary.list_title} />
                        )
                    }
                    else if (bodyContent.type === 'hero'){
                        return (
                            <Hero
                            heroImage = {bodyContent.primary.hero_image.url}
                            Alt = {bodyContent.primary.hero_image.alt}
                            title = {bodyContent.primary.hero_title}
                            content={bodyContent.primary.hero_content}
                            key={i}/>
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