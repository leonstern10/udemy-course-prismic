import React from 'react';
import styles from "../css/sidebox.module.css"
import RichText from './richText';
import SideBox from './sideBox';





const Sidebar = ({title, sides}) => {
    return (
        <div className={styles.grid}>
        <div className={styles.top-title}>
            <div className={styles.Maintitle}>
        <RichText render={title}/>
        </div>
        <div  className={styles.wrapper}>

           
            {sides.map((side,i) => {
                return (
                    <SideBox 
                    articleImage= {side.article_image.url}
                    title={side.article_title}
                    pageLink={`/${side.page_link._meta.uid}`}
                    key={i}/>
                        
                   
                )
            })}
           </div>
        </div>
        </div>

    )

}

export default Sidebar;
