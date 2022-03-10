import React from 'react'
import Image from 'next/image'
import { Card, Col } from 'react-bootstrap'

import BioHazard from '../../public/images/BioHazard.svg'
import Demolition from '../../public/images/Layer.svg'
import WetBlast from '../../public/images/Wetblast.svg'

// TO DO : Add styles for each svg

const ServiceCard = ({description, title, src}) => {

    const Svg = (title) => {
        switch(title){
            case "Démolition":
                return Demolition
            case "Décontamination":
                return BioHazard
            case "Wetblast":
                return WetBlast
            default:
                return BioHazard
        }
    }

    return (
        <Col lg="4" sm="12" className="mb-5">
            <Card >
                <Card.Header>
                <Card.Title className="text-center">{title}</Card.Title>
                </Card.Header>
                <Card.Body className="text-center p-3">
                    <Image src={Svg(title)} height={150} width={title == "Décontamination" ? 125 : 150}  className={title == "Wetblast" ? "wet-card" : ""}  id="card-svg"/>    
                    <hr className="w-100 white"></hr>
                    <Card.Text>
                        <p className="description">{description}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ServiceCard

