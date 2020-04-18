import React from 'react';
import styles from "../css/listbox.module.css"
import RichText from './richText';
import ListBox from './listBox';





const ListsGrid = ({title, lists}) => {
    return (
        <>
        <RichText render={title}/>
        <div  className={styles.wrapper}>

           
            {lists.map((list,i) => {
                return (
                    <ListBox 
                    listImage= {list.list_image.url}
                    title={list.article_title}
                    buttonLabel={list.button_label}
                    buttonDestination={`/${list.button_destination._meta.uid}`}
                    key={i}/>
                        
                   
                )
            })}
        
        </div>
        </>

    )

}

export default ListsGrid;

