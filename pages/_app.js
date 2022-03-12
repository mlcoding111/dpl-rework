import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/card.css'
import "react-image-gallery/styles/css/image-gallery.css";

import Layout from '../components/layout'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
