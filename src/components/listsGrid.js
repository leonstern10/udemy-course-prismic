import React from 'react';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs';
import ListBox from './listBox';



const ListsGridWrapper = styled.section `
    max-width: 1200px;
    margin: 0 auto;

    h3{
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    padding-top: 54px;
    padding-bottom: 21px;
    border-bottom: 1px solid #CACACA;
    margin-bottom: 0;
}
p{
    font-family: 'Lato', sans-serif;
    margin-block-start: 0px;

}`;

const ListsGrid = ({title, lists}) => {
    return (
        <ListsGridWrapper>

            <RichText render={title}/>
            {lists.map((list,i) => {
                return (
                    <ListBox 
                    listImage= {list.list_image.url}
                    title={list.article_title}
                    content={list.content}
                    buttonLabel={list.button_label}
                    buttonDestination={`/${list.button_destination._meta.uid}`}
                    key={i}/>
                        
                   
                )
            })}
        
        </ListsGridWrapper>

    )

}

export default ListsGrid;

