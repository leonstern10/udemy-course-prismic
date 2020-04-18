import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Link } from 'gatsby';




const Card = styled.section`
display: flex;
flex-direction: row;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 349px;
height: 317px;

    
`;

const Button = styled.div` 
        
    
`;

const ListBox = ({ title, buttonLabel, buttonDestination, listImage }) => {
    return (
        
        <Card>
            
             <img src={listImage} alt="Featured" />
               
                <div className="container">
                    <RichText render={title} />
                     </div>
                    <div>
                        <Button>
                            <Link to={buttonDestination}>
                                {buttonLabel}
                            </Link>
                        </Button>
                    </div>
        </Card>
      
    )
}

export default ListBox;