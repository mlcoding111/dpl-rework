import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";
import img from "../../public/images/truck.jpg";
import styles from "./apropos.module.css";

export default function Apropos() {
  return (
    <section id="a-propos">
      <Container fluid>
        <h2 data-aos="zoom-in-left">À-PROPOS</h2>
        <hr className="w-25 mb-5 " data-aos="zoom-in-left"></hr>
        <div className={styles.container}>
          <Row data-aos="fade-up" className="d-flex justify-content-center align-items-center" data-aos-anchor-placement="top-bottom">
            <Col lg={{ span: 6}} md="12">
              {/* <h3> Décontamination Précision Lacroix inc</h3> */}
              <h3 className="my-3">
                Mettre son expérience à profit
                <hr />
              </h3>
              <p className="long-text my-4">
                Décontamination Précision Lacroix est une jeune entreprise qui
                compte une dizaine d’année d’expérience dans le domaine. Nous
                sommes une équipe dynamique qui a le soucis du travail bien
                fait. Nos employés sont formés à la fine pointe de la
                technologie afin de respecter tout les normes de la CNESST. Tout
                nos contrats sont effectués avec soin et professionnalisme afin
                de garantir la sécurité du publique et celle de nos employés.
                Que ce soit dans le secteur institutionnel, commercial,
                industriel ou résidentiel nous sommes là pour vous.
              </p>

              <div className="d-lg-none d-xl-block">
                <h3 className="mt-5">
                  Partout au Québec
                  <hr />
                </h3>

                <p className="long-text my-4">
                  Nous offrons un service professionnel qui couvre tout le
                  Québec. Pour voir les services disponibles, veuillez consulter
                  nos services offerts.
                </p>
                <Link href="/Services" passHref>
                  <button className={styles.btn}>Nos services</button>
                </Link>
              </div>
            </Col>
            <Col lg="6" xl="5" md="12" data-aos="fade-right" className="mt-3">
              <Image src={img} alt="Truck"></Image>
            </Col>


            <Col md="8" className="d-none d-lg-block d-xl-none">
              <h3 className="mt-5">
                Partout au Québec
                <hr />
              </h3>

              <p className="long-text my-4">
                Nous offrons un service professionnel qui couvre tout le Québec.
                Pour voir les services disponibles, veuillez consulter nos
                services offerts.
              </p>
              <Link href="/Services" passHref>
                <button className={styles.btn}>Nos services</button>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
