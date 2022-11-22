import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaGoogle,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <Container className="mt-5 mb-5" style={{height:"69vh"}}>
      <Row >
        <Col lg="8" className="mt-5 mb-5">
          <img
            src="https://assets.kplus.com.tr/themes/travelerb2b/img/backgrounds/default-k.jpg"
            className="img-fluid shadow-4"
            alt="..."
          />
        </Col>
        {/* <Col md="auto">Variable width content</Col> */}
        <Col xs lg="3">
          <MDBCol className="mx-auto mt-5">
            <h5 className="text-uppercase fw-bold mb-4">
              <MDBIcon icon="gem" className="" />
             About Travel Advisor
            </h5>
            <p >
              A lot of people around the world travel every year to many places.
              Moreover, it is important to travel to humans. Some travel to
              learn more while some travel to take a break from their life. No
              matter the reason, travelling opens a big door for us to explore
              the world beyond our imagination and indulge in many things.
            </p>

            <div className="mt-4">
              <Link href="" className="me-4 text-black">
                <FaFacebookF />
              </Link>
              <Link href="" className="me-4 text-black">
                <FaTwitter />
              </Link>
              <Link href="" className="me-4 text-black">
                <FaInstagramSquare />
              </Link>
              <Link href="" className="me-4 text-black">
                <FaGoogle />
              </Link>
              <Link href="" className="me-4 text-black">
                <FaLinkedin />
              </Link>
              <Link href="" className="me-4 text-black">
                <FaGithub />
              </Link>
            </div>
          </MDBCol>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
