import React from "react";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";
import img from '../../public/images//truck.jpg'

export default function Apropos() {
  return (
    <section id="a-propos">

      <Container fluid>
      <h2 data-aos="zoom-in-left">À-PROPOS</h2>
        <hr className="w-25 mb-3 " data-aos="zoom-in-left"></hr>
        <Row className="my-5">
        </Row>
        <Row className="d-flex  text-left ml-5"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <Col lg={{ span: 5, offset: 1 }} md="12"  className="d-flex flex-column mt-2" >
        
            {/* <h3> Décontamination Précision Lacroix inc</h3> */}

            <h3>Mettre son expérience à profit<hr/></h3>
            <p className="long-text mt-2">
              Décontamination Précision Lacroix est une jeune entreprise qui
              compte une dizaine d’année d’expérience dans le domaine. Nous
              sommes une équipe dynamique qui a le soucis du travail bien fait.
              Nos employés sont formés à la fine pointe de la technologie afin
              de respecter tout les normes de la CNESST. Tout nos contrats sont
              effectués avec soin et professionnalisme afin de garantir la
              sécurité du publique et celle de nos employés. Que ce soit dans le
              secteur institutionnel, commercial, industriel ou résidentiel nous
              sommes là pour vous.
            </p>
            <h4 className="mt-2">Partout au Québec<hr/></h4>
     
            <p className="long-text my-1">
              Nous offrons un service professionel dans la région de Québec
            </p>
          </Col>
          <Col lg="5" md="12" data-aos="fade-right">
            <Image src={img} ></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
