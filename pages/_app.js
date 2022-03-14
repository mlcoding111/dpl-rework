import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/card.css'
// import '../styles/nav.css'
import "react-image-gallery/styles/css/image-gallery.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import layout from '../components/Layout.js'
import React from 'react';



function MyApp({ Component, pageProps }) {
  React.useEffect(()=>{
    AOS.init()
  }, [])
  return (
    <layout>      
      <Component {...pageProps} />
    </layout>
  )
}

export default MyApp
