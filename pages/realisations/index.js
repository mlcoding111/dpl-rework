import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import Images from '../../utils/workImages'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/'
  },
];


export default function Realisations() {
  return (
    <section id="realisations">
    <Container >
    <Row className="d-flex text-left p-2">
          <Col lg={{ span: 12, offset: 0 }} className="d-flex flex-column  mt-5">
            <h2 className="">RÉALISATIONS</h2>
            <hr className="w-100" />
          </Col>
        </Row>
        <ImageGallery items={Images} lazyLoad thumbnail/>
        {console.log(Images)}
    </Container>
    </section>

  )
}
