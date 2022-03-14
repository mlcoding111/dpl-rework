import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/card.css'
// import '../styles/nav.css'
import "react-image-gallery/styles/css/image-gallery.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/layout'
import React from 'react';


function MyApp({ Component, pageProps }) {
  React.useEffect(()=>{
    AOS.init()
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
