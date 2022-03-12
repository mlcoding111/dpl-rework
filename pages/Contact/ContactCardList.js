import React from "react";
import ContactCard from "./ContactCard";

import Styles from "./Contact.module.css";

import { Col, Container, Row } from "react-bootstrap";
const ContactCardList = () => {
  return (
    <>
     <Row className="d-flex justify-content-center">
         <Col md="6" lg="5">
        <ContactCard
          city="Montreal, Québec"
          name="Vanessa Roy Cardinal"
          number="819-446-1694 "
          mail="Dplacroix@outlook.com"
          role="Directrice"
          avatarSrc="https://www.bootdey.com/img/Content/user_2.jpg"
        />
        </Col>
        <Col md="6" lg="5">
        <ContactCard
          city="Montreal, Québec"
          name="Yann Lacroix"
          number="819-993-8686"
          mail="Dplacroix@outlook.com"
          role="Directeur"
          avatarSrc="https://www.bootdey.com/img/Content/user_1.jpg"
        />
        </Col>
    </Row>
        {/* <ContactCard city="Rouyn-Noranda, Québec" name="Michael Lacroix" number="Unknown" mail="kennycodes@hotmail.com"/> */}
    
    </>
  );
};

export default ContactCardList;
