import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import ContactCardList from "./ContactCardList";

import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <Container>
        <Row className="text-center" data-aos="fade-right">
          <h2>CONTACTEZ-NOUS</h2>
          <hr className="w-25 mb-5"></hr>
          <h5>N&apos;hésitez pas à nous contacter !</h5>
          <p className="long-text text-center">
            Pour toutes autres questions , contactez-nous par téléphone ou vous pouvez
            toujours nous envoyer un courriel.
          </p>
        </Row>
        <ContactCardList />
        <Row className="mt-5">
          <Col md="12" className="pl-5 text-center">
            <hr className="w-100"></hr>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
