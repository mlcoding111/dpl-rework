import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import {Container, Row, Col} from 'react-bootstrap'
import { navLinks } from "../../utils/data";
import { useRouter } from 'next/router';
import Image from 'next/image'
import Logo from '../../public/images/brand.svg'

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <Container fluid className="d-flex flex-column h-100">
        <Row className="h-100">
          <Col md="12" className="d-flex text-center justify-content-center flex-column pt-5">
            <nav>
              <ul className="d-flex text-white">
              {navLinks.map((link, index) => {
          return (
            <Link href={link.path} key={index} activeClassName="active">
              <li >
                <a href="#" > {/* Toggle active class when router path change */ }
                  {link.name}
                </a>
              </li>
            </Link>
          );
        })}
          </ul>
          
            </nav>
          </Col>
        </Row>
        
          {/* <Image src={Logo} height="100"></Image> */}
          <Row className="text-center">
          <p id="copy-right">Copyright 2021 DPL - All Rights Reserverd.</p>      
        </Row>
      </Container>
    </footer>
  );
}
