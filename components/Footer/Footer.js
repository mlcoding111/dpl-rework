import React from "react";
import styles from "./footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import {IoHomeSharp, IoMailSharp} from 'react-icons/io5'
import {MdPhone} from 'react-icons/md'

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <Container className="text-center text-md-left">
        <Row className="text-center text-md-left">
          <Col md="3" lg="3" xl="4" className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">
            Décontamination Précision Lacroix
            </h5>
            {/* <p className="long-text">Salut oti</p> */}
          </Col>
          <Col md="5" className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Services<hr/></h5>
            <ul>
              <li>- Démolition</li>
              <li>- Décontamination</li>
              <li>- Wetblast</li>
            </ul>
          </Col>
          <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact<hr/></h5>
            <ul>
              <li><IoHomeSharp/> <span>Québec, Canada</span></li>
            </ul>
            <ul>
              <li><IoMailSharp/> <span>Dplacroix@outlook.com</span></li>
            </ul>
            <ul>
              <li><MdPhone/> <span>819-993-8686</span> | <span>819-446-1694</span></li>
            </ul>
          </Col>
          <hr></hr>
        </Row>

        <Row className="align-items-center">
          <Col md="7" lg="8">
          <p className={styles.copyRight}>Copyright 2022 DPL - All Rights Reserverd.</p>    
          </Col>

          { /* Social */}
          {/* <Col md="5" lg="4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">

                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      
                    </a>
                </li>
              </ul>
            </div>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
}
