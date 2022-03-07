import styles from './layout.module.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
    const router = useRouter();
    return (
        <>
            <NavBar />
            <Head>
                <title>{router.pathname.substring(1)}</title>
                <meta name="description" content="DPL site web" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>{children}</main>
            <Footer/>
        </>
    )
  }
