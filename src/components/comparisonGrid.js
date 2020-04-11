import React from 'react';
import styled from 'styled-components';
import ComparisonBox from './comparisonBox';


const ComparisonWrapper = styled.section `
max-width: 1220px;
margin: 0 auto;
padding: 0 15px;
`;

const ComparisonGrid = ({services}) => {
    return (
        <ComparisonWrapper>

                {services.map((service,i) => {
                return (
                    <ComparisonBox 
                    popularTag= {service.popular_tag==="#1 Mas Popular"}
                    features={service.feature}
                    price={service.price}
                    readMore={service.read_more}
                    serviceDescription={service.service_description}
                    serviceLogo={service.service_logo.url}
                    webLabel={service.web_label}
                    webLink={service.web_link.url}
                    key={i}/>
                        
                   
                )
            })}
        
        </ComparisonWrapper>

    )

}

export default ComparisonGrid;

