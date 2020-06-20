import React from 'react';
import styles from "../css/sidetable.module.css"
import RichText from './richText';
import SideTableBox from './sideTableBox';
import { Link } from 'gatsby';


const SideTable = ({title, sidetables, buttonLabel, compareAll}) => {
    return (
        <div className={styles.grid}>
            
        <div className={styles.Maintitle}>
        <RichText render={title}/>
        </div>
        <div  className={styles.wrapper}>

           
            {sidetables.map((sidetable,i) => {
                return (
                    <SideTableBox 
                    logoImage= {sidetable.logo.url}
                    ratingNumber={sidetable.rating_number}
                    ranking={sidetable.ranking}
                    webLink={sidetable.web_link.url}
                    key={i}/> 
                )   
            }
            )}
           </div>
     
        <Link to= {`/${compareAll}/`} className={styles.cta}>
        {buttonLabel}
        </Link> 
        </div>
    )

}

export default SideTable;
