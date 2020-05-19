import React from 'react';
import styled from 'styled-components';
import ComparisonBox from './comparisonBox';


const ComparisonWrapper = styled.section `
max-width: 1139px;
margin-right: 50px;
@media (max-width: 1079px) {
    margin-right: 0px;
}



`;

const ComparisonGrid = ({ comparisons}) => {
    return (
        <ComparisonWrapper>
                
                {comparisons.map((comparison,i) => {
                return (
                    <ComparisonBox 
                    name={comparison.name}
                    popularTag= {comparison.tag ==='Más Popular'}
                    numberRank={comparison.number_rank}
                    bestFor={comparison.best_for}
                    listPrice={comparison.list_price}
                    features={comparison.feature}
                    ratingNumber={comparison.rating_number}
                    ratingStar={comparison.rating_star}
                    price={comparison.price}
                    readMore={comparison.read_more}
                    serviceDescription={comparison.service_description}
                    serviceLogo={comparison.service_logo.url}
                    webLabel={comparison.web_label}
                    webLink={comparison.web_link.url}
                    key={i}/>
                        
                   
                )
            })}
        
        </ComparisonWrapper>

    )

}

export default ComparisonGrid;

