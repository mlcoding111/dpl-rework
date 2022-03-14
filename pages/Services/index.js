import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ServicesList from "./ServiceList";

export default function Services() {
  return (
    <section id="services">
 
        <h2 data-aos="fade-up">NOS SERVICES</h2>
        <hr className="w-25 mb-3"></hr>
        <ServicesList />
     
    </section>
  );
}
