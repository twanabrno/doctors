import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../Assets/DentistBranches.css";
import logo from '../Assets/img/pngs/dentist.png'

const DentistBranches = () => {
  return (
    <>
      <div id="DentistBranches">
        <Container className="py-5 text-center">
          <h3>Diş Hakimleri</h3>
        </Container>
      </div>
      <Container className="DentistBranches-list py-5">
        <Row className="text-center">
        <Col lg={3} className="px-3 mb-4">
          <Card className="py-5">
            <Card.Body className="px-0">
              <img src={logo} className="image-fluid" alt="" />
              <Card.Title className="mt-4 mb-3">Card Title</Card.Title>
              <Card.Subtitle className="text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
            <div className="main-branches-overlay w-100"></div>
          </Card>
        </Col>
        <Col lg={3} className="px-3 mb-4">
          <Card className="py-5">
            <Card.Body className="px-0">
              <img src={logo} className="image-fluid" alt="" />
              <Card.Title className="mt-4 mb-3">Card Title</Card.Title>
              <Card.Subtitle className="text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
            <div className="main-branches-overlay w-100"></div>
          </Card>
        </Col>
        <Col lg={3} className="px-3 mb-4">
          <Card className="py-5">
            <Card.Body className="px-0">
              <img src={logo} className="image-fluid" alt="" />
              <Card.Title className="mt-4 mb-3">Card Title</Card.Title>
              <Card.Subtitle className="text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
            <div className="main-branches-overlay w-100"></div>
          </Card>
        </Col>
        <Col lg={3} className="px-3 mb-4">
          <Card className="py-5">
            <Card.Body className="px-0">
              <img src={logo} className="image-fluid" alt="" />
              <Card.Title className="mt-4 mb-3">Card Title</Card.Title>
              <Card.Subtitle className="text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
            <div className="main-branches-overlay w-100"></div>
          </Card>
        </Col>
        <Col lg={3} className="px-3 mb-4">
          <Card className="py-5">
            <Card.Body className="px-0">
              <img src={logo} className="image-fluid" alt="" />
              <Card.Title className="mt-4 mb-3">Card Title</Card.Title>
              <Card.Subtitle className="text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
            <div className="main-branches-overlay w-100"></div>
          </Card>
        </Col>
        <Col lg={3} className="px-3 mb-4">
          <Card className="py-5">
            <Card.Body className="px-0">
              <img src={logo} className="image-fluid" alt="" />
              <Card.Title className="mt-4 mb-3">Card Title</Card.Title>
              <Card.Subtitle className="text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
            <div className="main-branches-overlay w-100"></div>
          </Card>
        </Col>
        </Row>
      </Container>
    </>
  );
};

export default DentistBranches;
