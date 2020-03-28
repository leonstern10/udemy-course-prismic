import React from 'react';
import ListsGrid from './listsGrid';
import {RichText, KeyText} from 'prismic-reactjs';
import styled from 'styled-components';
import {Link} from 'gatsby';


const ListBoxWrapper = styled.section `
padding: 40px 0;
background: #fffff;
border-bottom: 1px solid #CACACA;
`;


const Button = styled.div ` 
background: #8461C9;
display: inline-block;
border-radius: 4px;
padding: 4px 8px;
cursor: pointer;

`


const ListBox = ({title, content, buttonLabel, buttonDestination}) => {
    return ( 
    <ListBoxWrapper>
        <RichText render={title}/>
        <RichText render={content}/>
        <Button>
            <Link render ={buttonLabel}/>
        </Button>
    </ListBoxWrapper>
)
}

export default ListBox;