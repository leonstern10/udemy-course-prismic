import React from 'react';
import styled from 'styled-components';
import {RichText} from 'prismic-reactjs';
import ListBox from './listBox';



const ListsGridWrapper = styled.section `
    max-width: 800px;
    margin: 0 auto;


h2{
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    border-bottom: 1px solid #CACACA;
}
`
const ListsGrid = ({title, lists}) => {
    return (
        <ListsGridWrapper>

            <RichText render={title}/>
            {lists.map((list,i) => {
                return (
                    <ListBox 
                    title={list.article_title}
                    content={list.content}
                    key={i}/>
                        
                   
                )
            })}
        
        </ListsGridWrapper>

    )

}

export default ListsGrid;

