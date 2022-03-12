import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import { IoMailOutline } from "react-icons/io5";

const ContactCard = ({name, mail, number, avatarSrc, role}) => {
    return (
        <Col md="6">    
            <Card id="contact-card"  className="d-flex justify-content-center" >              
            <Row>
            <Col lg="3" md="12" className="d-flex justify-content-center" >
                <Card.Header>   
                <Card.Title>
                    <img src={avatarSrc} className="card-img" height="125"/>
                </Card.Title>
                </Card.Header>   
            </Col>
            <Col lg="9" md="12">
                <Card.Body className="d-flex">
                    <Card.Text className="w-100">
                        <h4>{name}</h4>
                        <p className="long-text">{role}</p>
                        <hr className="w-100"/>

                        <p className="long-text"> <IoMailOutline />{mail}</p>
                        <p className="long-text"><ion-icon name="call-outline"></ion-icon> {number}</p>
                    </Card.Text>
                </Card.Body>                
            </Col>
            </Row>
           
            </Card>
        </Col>
    )
}

export default ContactCard
