import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../Assets/Aboutus.css";
import logo from "../Assets/img/pngs/logo.png";
import flag from "../Assets/img/pngs/flag.png";
const AboutUs = () => {
  return (
    <>
      <Container>
        <Row className="about-header text-center">
          <Col sm={12}>
            <img src={logo} className="image-fluid" alt="" />
            <h3 className="mt-4 mb-3">
              Making the healthcare experience more human
            </h3>
          </Col>
          <Col md={6} className="pt-5 pb-3 px-5">
            <p className="text-muted">
              We want patients to find the perfect doctor and book an
              appointment in the most easy way. The patient journey should be
              enjoyable, and that's why we are always next to them: to help them
              find the best possible care. Anytime, anywhere.
            </p>
          </Col>
          <Col md={6} className="pt-5 pb-3 px-5">
            <p className="text-muted">
              We also help doctors to better manage their practice and build
              their online reputation. With our integrated end-to-end solution,
              doctors are able not only to improve their online presence, but
              also to devote their time to what really matters: their patients.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="aboutus-cards">
        <Container>
          <Row>
            <Col md={6} className="pt-5">
              <h2 className="mt-5">The world's biggest healthcare platform</h2>
              <h4 className="my-4">
                We are a global company with local culture
              </h4>
              <img src={logo} className="image-fluid" alt="" />
            </Col>
            <Col md={6}>
              <Row className="px-5">
                <Col md={6} className="pt-5">
                  <Card>
                    <Card.Body>
                      <img src={flag} className="image-fluid flag-img" alt="" />
                      <Card.Title className="mt-2 mb-3">
                        Leader in 4 countries
                      </Card.Title>
                      <Card.Subtitle className="text-muted">
                        Turkey, Iraq, Suriye, Iran
                      </Card.Subtitle>
                    </Card.Body>
                    <div className="main-branches-overlay w-100"></div>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <img src={flag} className="image-fluid flag-img" alt="" />
                      <Card.Title className="mt-2 mb-3">
                        Leader in 4 countries
                      </Card.Title>
                      <Card.Subtitle className="text-muted">
                        Turkey, Iraq, Suriye, Iran
                      </Card.Subtitle>
                    </Card.Body>
                    <div className="main-branches-overlay w-100"></div>
                  </Card>
                </Col>
                <Col md={6} className="pt-5">
                  <Card>
                    <Card.Body>
                      <img src={flag} className="image-fluid flag-img" alt="" />
                      <Card.Title className="mt-2 mb-3">
                        Leader in 4 countries
                      </Card.Title>
                      <Card.Subtitle className="text-muted">
                        Turkey, Iraq, Suriye, Iran
                      </Card.Subtitle>
                    </Card.Body>
                    <div className="main-branches-overlay w-100"></div>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <img src={flag} className="image-fluid flag-img" alt="" />
                      <Card.Title className="mt-2 mb-3">
                        Leader in 4 countries
                      </Card.Title>
                      <Card.Subtitle className="text-muted">
                        Turkey, Iraq, Suriye, Iran
                      </Card.Subtitle>
                    </Card.Body>
                    <div className="main-branches-overlay w-100"></div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="aboutus-last">
        <h2>Sounds interesting? Join us now!</h2>
        <Button variant="primary px-5">Sign Up</Button>
      </Container>
    </>
  );
};

export default AboutUs;
