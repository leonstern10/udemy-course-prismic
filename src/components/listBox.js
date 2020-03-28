import React from 'react';
import ListsGrid from './listsGrid';
import {RichText} from 'prismic-reactjs';
import styled from 'styled-components';


const ListBoxWrapper = styled.section `
padding: 20px;
background: #fffff;
border-bottom: 1px solid #CACACA;
border-top: 1px solid #CACACA;


`


const ListBox = ({title, content}) => {
    return ( 
    <ListBoxWrapper>
        <RichText render={title}/>
        <RichText render={content}/>
    </ListBoxWrapper>
)
}

export default ListBox;