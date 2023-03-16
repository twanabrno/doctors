import React from "react";
import "../Assets/Style.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../Assets/img/logo-footer.png";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row className="pt-3 pb-5">
          <Col>
            <img src={logo} className="image-fluid logo-footer" alt="" />
          </Col>
          <Col className="text-end">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon"/>
            <FaWhatsapp className="social-icon"/>
          </Col>
        </Row>
        <Row className="footer-bottom text-white mt-4">
          <div className="d-flex justify-content-between">
            <div>© Türkiye Doktor ve Hastane Rehberi 2021</div>
            <div>Tasarım by Twana Brno</div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
