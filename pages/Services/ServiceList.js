import React from 'react'
import ServiceCard from './ServiceCard'

import ServicesData from '../../localData/services.json'
import { Container, Row } from 'react-bootstrap'

const ServicesList = () => {
    return (
        <Container>
            <Row className="mt-5 h-100" >
                {ServicesData.services.map((index, i) => (
                    <ServiceCard title={index.title} src={index.src} description={index.description} key={i}/>
                ))}
            </Row>
        </Container>
    )
}

export default ServicesList
