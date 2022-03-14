import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import Images from '../../utils/workImages'


export default function Realisations() {

  const resize = () => {
    const gallery = document.querySelector('.image-gallery')
    gallery.classList.toggle("flex-center")
  }

  return (
    <section id="realisations">
          <Row className="d-flex text-left p-1 d-flex justify-content-center align-items-center" data-aos="zoom-in-left">
          <Col lg={{ span: 12, offset: 0 }} className="d-flex flex-column my-3">
            <h2 className="">RÉALISATIONS</h2>
            <hr className="w-50" />
          </Col>
      </Row>
    <Container data-aos="zoom-in-left">
      <Row className="d-flex text-left p-2 d-flex justify-content-center align-items-center" >
          <ImageGallery items={Images} lazyLoad thumbnail showBullets showIndex showNav onScreenChange={resize}/>       
      </Row>

    </Container>
    </section>

  )
}
