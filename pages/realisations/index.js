import React from 'react'
import { Container } from 'react-bootstrap';
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
    <Container >
        <ImageGallery items={Images} lazyLoad thumbnail/>
        {console.log(Images)}
    </Container>

  )
}
