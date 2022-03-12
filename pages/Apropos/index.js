import React from "react";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";
import img from '../../public/images//truck.jpg'

export default function Apropos() {
  return (
    <section id="a-propos">
      <Container fluid>
        <Row className="d-flex  text-left p-2 ml-5">
          <Col lg={{ span: 5, offset: 1 }} md="12"  className="d-flex flex-column  mt-5">
            <h2 className="">À-PROPOS DE </h2>
            <h3> Décontamination Précision Lacroix inc</h3>
            <hr className="w-100" />
            <h3 className="mt-3">Mettre son expérience à profit</h3>
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
          </Col>
          <Col lg="5" md="12">
            <Image src={img} ></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
