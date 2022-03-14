import React from "react";
import ContactCard from "./ContactCard";

import Styles from "./Contact.module.css";

import femaleAvatar from "../../public/images/avatar-female.svg";
import maleAvatar from "../../public/images/avatar-male.svg";

import { Col, Container, Row } from "react-bootstrap";
const ContactCardList = () => {
  return (
    <>
     <Row className="d-flex justify-content-center">
         <Col md="6" lg="5" data-aos="zoom-in-left">
        <ContactCard
          city="Montreal, Québec"
          name="Vanessa Roy Cardinal"
          number="819-446-1694 "
          mail="Dplacroix@outlook.com"
          role="Directrice"
          avatarSrc={femaleAvatar}
        />
        </Col>
        <Col md="6" lg="5" data-aos="zoom-in-right">
        <ContactCard
          city="Montreal, Québec"
          name="Yann Lacroix"
          number="819-993-8686"
          mail="Dplacroix@outlook.com"
          role="Directeur"
          avatarSrc={maleAvatar}
        />
        </Col>
    </Row>
        {/* <ContactCard city="Rouyn-Noranda, Québec" name="Michael Lacroix" number="Unknown" mail="kennycodes@hotmail.com"/> */}
    
    </>
  );
};

export default ContactCardList;
