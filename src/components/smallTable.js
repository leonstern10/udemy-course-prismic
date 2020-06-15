import React from 'react';
import RichText from './richText';
import SmallTableBox from './smalltableBox';
import styled from 'styled-components';

const SmallTableWrapper = styled.section `

`;

const SmallTable = ({smalltables}) => {
    return (
 <SmallTableWrapper>
{smalltables.map((smalltable,i) => {
                return (
                    <SmallTableBox 
                    logoImage={smalltable.logo_image.url}
                    numberRating={smalltable.number_rating}
                    ratingStars={smalltable.rating_stars}
                    buttonText={smalltable.button_text}
                    webLink={smalltable.web_link.url}
                    key={i}/>
                    )
                })}
        </SmallTableWrapper>
    )
}

export default SmallTable;
