import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ListBoxWrapper = styled.section`
    padding: 40px 0;
    background: #fffff;
    border-bottom: 1px solid #CACACA;
    .list-content {
        display: flex;       
        margin: auto 0;
        padding: 0 15px;
        align-items: center;
        .cell {
            float: left;
            width: 33.33%;
        }
        .img-wrapper {      
            display: block;
            height: auto;        
            img {
                position: center;
                width: 100%
                height: 100%
                margin: auto 0; 
            }
        }    
        .content-wrapper {
            align-self: center;
            display: block;
            flex-direction: column;
            max-width: 760px;
        }
    }
`;

const Button = styled.div` 
        
    a {
    background: #8461C9;
    cursor: pointer;
    float: left;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
        border-radius: 8px;
        padding: 12px 24px;
        color: white; 
        display: inline-block;
        text-decoration: none;
        text-align: center;
        display: inline-block;
        font-size: 16px;   
        &:hover{
            background: #1D0276;
        }
    }
`;

const ListBox = ({ title, content, buttonLabel, buttonDestination, listImage }) => {
    return (
        <ListBoxWrapper>
            <div className="list-content">
                <div class="cell" >
                    <div className="img-wrapper">
                        <img src={listImage} alt="Featured" />
                    </div>
                </div>
                <div class="axis"> {/* Oreder of internal cells (i.e the 'axis-cell' elements) within this class wil be changed (Horisenatal/Vertical), according the screen width */}
                    <div class="axis-cell">
                        <div className="content-wrapper">
                            <RichText render={title} />
                            <div className="list-text">
                                <RichText render={content} />
                            </div>
                        </div>
                    </div>
                    <div class="axis-cell">
                        <Button>
                            <Link to={buttonDestination}>
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