import styles from './layout.module.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { navLinks } from "../utils/data";

import TopMessage from './Reusable/TopMessage'
import React from 'react'

export default function layout({ children }) {
    const router = useRouter();

    const formatTitle = (pathname) => {
        let title;
        navLinks.forEach(link => {
            console.log(`Link : ${link.path} \n Pathname: ${pathname}`)
            if(link.path == pathname){
                title = link.name
            }
        })
        return title
    }
    return (
        <>         
            <Head>
            <title>{formatTitle(router.pathname)}</title>
                {/* <title>{router.pathname.substring(1)}</title> */}
                <meta name="description" content="DPL site web" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />                
            </Head>
            <TopMessage/>
            <NavBar />
          
            <main>{children}</main>
            <Footer/>
        </>
    )
  }
