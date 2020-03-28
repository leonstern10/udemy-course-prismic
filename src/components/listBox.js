import React from 'react';
import {RichText} from 'prismic-reactjs';
import styled from 'styled-components';
import {Link} from 'gatsby';


const ListBoxWrapper = styled.section `
padding: 40px 0;
background: #fffff;
border-bottom: 1px solid #CACACA;

.list-content{
    display: flex;
    margin: auto 0;
    align-self: center;

    .img-wrapper{      
    display: block;
        img {
        max-width: 241px
       
    }
        
    }
    .content-wrapper{
    margin: 0 20px;
    align-self: center;
    display: block;
   flex-direction: column;
   max-width: 800px;
}
.list-conent{
    display: block;
}
   .button-wrapper{
    align-self: center;
    width: 25%;
}
    }
}

`;


const Button = styled.div ` 
background: #8461C9;
display: inline-block;
border-radius: 8px;
cursor: pointer;
float: right;




a{
    padding: 16px 28px;
    color: white; 
    display: inline-block;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    
    

}

`


const ListBox = ({title, content, buttonLabel, buttonDestination, listImage}) => {
    return ( 
    <ListBoxWrapper>
        <div className="list-content">
        <div className= "img-wrapper">
            <img src={listImage} alt= "Featured"/>
        </div>
        <div className="content-wrapper">
            <div className="list-title">
        <RichText render={title}/>
        </div>
        <div className="list-content">
        <RichText render={content}/>
        </div>
        </div>
        <div className="button-wrapper">
        <Button>
            <Link to = {buttonDestination}>
                {buttonLabel}
            </Link> 
        </Button>
        </div>
        </div>
    
         
    </ListBoxWrapper>
)
}

export default ListBox;