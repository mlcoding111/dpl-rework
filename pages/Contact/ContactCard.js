import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import { IoMailOutline, IoPhonePortraitSharp } from "react-icons/io5";
import {FaPhoneAlt} from 'react-icons/fa'

import Styles from './Contact.module.css'

const ContactCard = ({name, mail, number, avatarSrc, role}) => {
    return (

           <div className={Styles.container}>
                {/* <div className={Styles.bannerImg}></div> */}
                <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" className={Styles.profileImg}></img>
                <h1 className={Styles.name}>{name}</h1>
                <p className={Styles.description}>Directrice général</p>
                <hr></hr>
                <div className="d-flex justify-content-center ">

                <div className={Styles.info}>                    
                    <IoMailOutline size={"2em"}/> {mail}<br/>
                    <FaPhoneAlt size={"2em"}/> {number}<br/>                    
                </div>
                </div>
           

                <button className={Styles.btn}>Follow</button>
            </div>

    )
}

export default ContactCard
