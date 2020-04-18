import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Link } from 'gatsby';

// const ListBoxWrapper = styled.section`
    
// `;

// const Button = styled.div` 
        
    
// `;

const ListBox = ({ title, content, buttonLabel, buttonDestination, listImage }) => {
    return (
        // <ListBoxWrapper>
            <div>
               <div>
             <img src={listImage} alt="Featured" />
               </div>
                <div>
                    <RichText render={title} />
                     </div>
                    <div>
                        {/* <Button> */}
                            <Link to={buttonDestination}>
                                {buttonLabel}
                            </Link>
                        {/* </Button> */}
                    </div>
            </div>
        // </ListBoxWrapper>
    )
}

export default ListBox;