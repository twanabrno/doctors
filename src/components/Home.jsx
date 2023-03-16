import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Radio } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../components/Forms/FormikController";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { FaHospitalAlt } from "react-icons/fa";

import person from "../Assets/img/person.jpg";
import arrow from "../Assets/img/banner-arrow.png";
import "../Assets/Style.css";
import BranchesSelect from "./Forms/BranchesSelect";

const optionsWithDisabled = [
  { label: "Face to face", value: "f2f" },
  { label: "Online", value: "online" },
];

const city = [
  { key: "option 1", value: "option1" },
  { key: "option 2", value: "option2" },
  { key: "option 3", value: "option3" },
  { key: "option 4", value: "option4" },
];
const MainBranches = () => {
  const [booking, setBooking] = useState("f2f");
  const initialValues = {
    name: "",
    city: "",
    mainBranch: "",
    branch: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    city: Yup.string().required("City is required"),
  });
  const handleShow = (e) => {
    setBooking(e.target.value);
  };

  const handleAddData = (values, onSubmitProps) => {
    console.log(values);
    setTimeout(() => onSubmitProps.setSubmitting(false), 3000);
  };

  return (
    <>
      <div id="banner" className="animated-bg banner-bg">
        <Container className="inner-text">
          <Row>
            <Col className="text-center">
              <div className="banner-text">
                <h2>
                  <span>DOKTOR</span>ARAMA
                </h2>
                <h3>İle ve branşa göre arama yapabilirsiniz</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="px-4">
              <div className="banner-search">
                <Radio.Group
                  options={optionsWithDisabled}
                  onChange={handleShow}
                  value={booking}
                  optionType="button"
                  buttonStyle="outline"
                  className="my-3"
                />
                <div className="">
                  {booking == "f2f" && (
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleAddData}
                      validateOnMount
                    >
                      {(formik) => (
                        <Form className="w-100">
                          <Row>
                            <Col md={3}>
                              <FormikController
                                control="input"
                                type="text"
                                name="name"
                                label="Dr. Name"
                                formik={formik}
                              />
                            </Col>
                            <Col md={2}>
                              <FormikController
                                control="select"
                                formik={formik}
                                options={city}
                                name="city"
                                label="Choose City"
                              />
                            </Col>
                            <Col md={5}>
                              <BranchesSelect
                                name1="mainBranch"
                                name2="branch"
                                label1="Main Branch"
                                label2="Branch"
                                formik={formik}
                              />
                            </Col>
                            <Col md={2}>
                              <Button
                                className="w-100"
                                variant="primary"
                                type="submit"
                              >
                                Search
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      )}
                    </Formik>
                  )}
                  {booking == "online" && (
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      validateOnMount
                    >
                      {(formik) => (
                        <Form className="w-100">
                          <Row>
                            <Col md={5}>
                              <FormikController
                                control="select"
                                formik={formik}
                                options={city}
                                name="mainCategory"
                                label="Main Category"
                              />
                            </Col>
                            <Col md={5}>
                              <FormikController
                                control="select"
                                formik={formik}
                                options={city}
                                name="category"
                                label="Category"
                              />
                            </Col>
                            <Col md={2}>
                              <Button
                                className="w-100"
                                variant="primary"
                                type="submit"
                              >
                                Search
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      )}
                    </Formik>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row className="main-bracnches text-center">
            <Col className="banner-text">
              <h3>Main Branches</h3>
              <img src={arrow} className="mt-1" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-branches-bg">
        <Container id="main-branches">
          <Row className="text-center">
            <Col>
              <Card as={Link} to="/doctors">
                <Card.Body>
                  <FaHospitalAlt className="card-icon" />
                  <Card.Title className="mt-2 mb-3">Temel Bilim</Card.Title>
                  <Card.Subtitle className="text-muted">
                    1500 Visitor
                  </Card.Subtitle>
                </Card.Body>
                <div className="main-branches-overlay w-100"></div>
              </Card>
            </Col>
            <Col>
              <Card as={Link} to="/doctors">
                <Card.Body>
                  <FaHospitalAlt className="card-icon" />
                  <Card.Title className="mt-2 mb-3">Dahili Bilim</Card.Title>
                  <Card.Subtitle className="text-muted">
                    1500 Visitor
                  </Card.Subtitle>
                </Card.Body>
                <div className="main-branches-overlay w-100"></div>
              </Card>
            </Col>
            <Col>
              <Card as={Link} to="/doctors">
                <Card.Body>
                  <FaHospitalAlt className="card-icon" />
                  <Card.Title className="mt-2 mb-3">Cerrahi Bilim</Card.Title>
                  <Card.Subtitle className="text-muted">
                    1500 Visitor
                  </Card.Subtitle>
                </Card.Body>
                <div className="main-branches-overlay w-100"></div>
              </Card>
            </Col>
            <Col>
              <Card as={Link} to="/doctors">
                <Card.Body>
                  <FaHospitalAlt className="card-icon" />
                  <Card.Title className="mt-2 mb-3">Diş Hakimleri</Card.Title>
                  <Card.Subtitle className="text-muted">
                    1500 Visitor
                  </Card.Subtitle>
                </Card.Body>
                <div className="main-branches-overlay w-100"></div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* After Branches */}
      <div id="signup-section">
        <Container>
          <h2 className="text-white">TÜRKİYE DOKTOR REHBERİ</h2>
          <p className="mt-4 mb-5">
            Sitemize doktor & diş hekimi kayıdı ve gösterimi ücretsizdir. Mevcut
            bilgilerinizi güncelletebilirsiniz,
            <br />
            dilerseniz kaydınızı sildirebilirsiniz.
          </p>
          <div>
            <a className="btn btn-primary px-4" href="">
              Sign Up
            </a>
            <span className="px-3"></span>
            <a className="btn btn-light px-4" href="">
              Contact
            </a>
          </div>
        </Container>
      </div>
      {/* Our Last Users */}
      <div id="our-users">
        <Container>
          <div className="d-flex justify-content-between px-2">
            <div>
              <h5>
                Son Kayitlar <span>Toplam : 123</span>
              </h5>
            </div>
            <div>
              <a className="btn btn-primary px-4" href="">
                Sign Up
              </a>
            </div>
          </div>
          <div className="d-flex flex-wrap my-5">
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
            <Link to="/doctor">
              <img src={person} className="image-fluid" alt="" />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainBranches;
