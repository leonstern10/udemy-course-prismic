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
    // align-self: center;
    padding: 0 15px;

    .img-wrapper{      
    display: block;
    width: 241px;
    height: auto;
    
        img {
       position: center;
       width: 100%
       height: 100%
       margin: auto 0; 
     }
    }

    .content_button_wrapper{
        display: flex;
        margin: 0 20px;
        
    }
    .content-wrapper{
    padding: 0 20px;
    align-self: center;
    display: block;
   flex-direction: column;
   max-width: 800px;
}

   
    


    }
}

`;

// .list-text{
//     display: block;
//     font-family: 'Lato', sans-serif;
// }

const Button = styled.div ` 
background: #8461C9;
display: flex;
border-radius: 8px;
cursor: pointer;
float: right;
font-family: 'Raleway', sans-serif;
font-weight: bold;





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
        <div className="content_button_wrapper">
        <div className="content-wrapper">
            <div className="list-title">
        <RichText render={title}/>
        </div>
        <div className="list-text">
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
        </div>
    
         
    </ListBoxWrapper>
)
}

export default ListBox;