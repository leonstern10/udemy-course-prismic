import React from 'react';
import styled from 'styled-components';
import RichText from './richText';
import ComparisonBox from './comparisonBox';


const ComparisonWrapper = styled.section ``

const ComparisonGrid = ({services}) => {
    return (
        <ComparisonWrapper>

                {services.map((service,i) => {
                return (
                    <ComparisonBox 
                    popularTag= {service.popular_tag}
                    feature1={service.feature1}
                    feature2={service.feature2}
                    feature3={service.feature3}
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

