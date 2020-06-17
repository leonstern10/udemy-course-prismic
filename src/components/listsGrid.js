import React from 'react';
import styles from "../css/listbox.module.css"
import RichText from './richText';
import ListBox from './listBox';





const ListsGrid = ({title, lists}) => {
    return (
        <div className={styles.listWrap}>
        <div className={styles.gridTitle}>
            <div className={styles.title}>
        <RichText render={title}/>
        </div>
        <div  className={styles.wrapper}>

           
            {lists.map((list,i) => {
                return (
                    <ListBox 
                    listImage= {list.list_image.url}
                    Alt= {list.list_image.alt}
                    title={list.article_title}
                    color={list.color}
                    buttonDestination={`/${list.button_destination._meta.uid}`}
                    key={i}/>
                        
                   
                )
            })}
           </div>
        </div>
        </div>

    )

}

export default ListsGrid;

