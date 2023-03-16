import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Radio } from "antd";

import { GoListUnordered } from "react-icons/go";
import { CgMenuGridR } from "react-icons/cg";
import { MdEmail, MdLocationPin } from "react-icons/md";
import defimg from "../Assets/img/pngs/doctor1.jpg";
import "../Assets/Doctors.css";

const optionsWithDisabled = [
  { label: <GoListUnordered />, value: "small" },
  { label: <CgMenuGridR />, value: "large" },
];

const Doctors = () => {
  const [show, setShow] = useState("small");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const handleShow = (e) => {
    setShow(e.target.value);
  };
  const handlePaginate = (data) => {
    setCurrentPage(data.selected + 1);
    // getData(limit, data.selected + 1);
  };

  return (
    <>
      <div id="doctors">
        <Container className="py-5 text-center">
          <h3 className="text-white">Doctors</h3>
        </Container>
      </div>
      <Container className="py-5">
        <Row>
          <Col lg={9} className="pe-5">
            <div className="doctors-left">
              <div className="filters d-flex justify-content-between">
                <div className="px-4">
                  <Form.Select aria-label="Default select example">
                    <option disabled defaultValue>
                      Sort By
                    </option>
                    <option>Date</option>
                    <option>A-Z</option>
                    <option>Z-A</option>
                    <option>Rating</option>
                  </Form.Select>
                </div>

                <div>
                  <Radio.Group
                    options={optionsWithDisabled}
                    onChange={handleShow}
                    value={show}
                    optionType="button"
                    buttonStyle="outline"
                  />
                </div>
              </div>
              {show == "small" && (
                <Row className="pt-5 px-3">
                  <Col sm={12} className="docs mb-4" as={Link} to="/doctor">
                    <div className="d-flex justify-centent-start">
                      <div>
                        <img src={defimg} className="image-fluid" alt="" />
                      </div>
                      <div className="px-4 w-100">
                        <h5 className="text-muted mb-1">Dis Hekimi</h5>
                        <h5>Doktor Adi</h5>
                        <div className="p text-muted mb-1 py-1">
                          burda adress yazilir
                        </div>
                        <span href="#" className="text-muted me-4">
                          <MdLocationPin className="mx-2 email-logo" />
                          Erbil
                        </span>
                        <a href="#" className="text-muted">
                          <MdEmail className="mx-2 email-logo" />
                          Email
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} className="docs mb-4" as={Link} to="/doctor">
                    <div className="d-flex justify-centent-start">
                      <div>
                        <img src={defimg} className="image-fluid" alt="" />
                      </div>
                      <div className="px-4 w-100">
                        <h5 className="text-muted mb-1">Dis Hekimi</h5>
                        <h5>Doktor Adi</h5>
                        <div className="p text-muted mb-1 py-1">
                          burda adress yazilir
                        </div>
                        <span href="#" className="text-muted me-4">
                          <MdLocationPin className="mx-2 email-logo" />
                          Erbil
                        </span>
                        <a href="#" className="text-muted">
                          <MdEmail className="mx-2 email-logo" />
                          Email
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} className="docs mb-4" as={Link} to="/doctor">
                    <div className="d-flex justify-centent-start">
                      <div>
                        <img src={defimg} className="image-fluid" alt="" />
                      </div>
                      <div className="px-4 w-100">
                        <h5 className="text-muted mb-1">Dis Hekimi</h5>
                        <h5>Doktor Adi</h5>
                        <div className="p text-muted mb-1 py-1">
                          burda adress yazilir
                        </div>
                        <span href="#" className="text-muted me-4">
                          <MdLocationPin className="mx-2 email-logo" />
                          Erbil
                        </span>
                        <a href="#" className="text-muted">
                          <MdEmail className="mx-2 email-logo" />
                          Email
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} className="docs mb-4" as={Link} to="/doctor">
                    <div className="d-flex justify-centent-start">
                      <div>
                        <img src={defimg} className="image-fluid" alt="" />
                      </div>
                      <div className="px-4 w-100">
                        <h5 className="text-muted mb-1">Dis Hekimi</h5>
                        <h5>Doktor Adi</h5>
                        <div className="p text-muted mb-1 py-1">
                          burda adress yazilir
                        </div>
                        <span href="#" className="text-muted me-4">
                          <MdLocationPin className="mx-2 email-logo" />
                          Erbil
                        </span>
                        <a href="#" className="text-muted">
                          <MdEmail className="mx-2 email-logo" />
                          Email
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              {show == "large" && (
                <Row className=" text-center pt-5 px-3">
                  <Col md={4} className="px-3 mb-4">
                    <Card className="py-4 docs" as={Link} to="/doctor">
                      <Card.Body>
                        <img src={defimg} className="image-fluid " alt="" />
                        <Card.Title className="mt-2 mb-3">
                          Doktor Adi
                        </Card.Title>
                        <Card.Subtitle className="text-muted">
                          Erbil
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="px-3 mb-4">
                    <Card className="py-4 docs" as={Link} to="/doctor">
                      <Card.Body>
                        <img src={defimg} className="image-fluid " alt="" />
                        <Card.Title className="mt-2 mb-3">
                          Doktor Adi
                        </Card.Title>
                        <Card.Subtitle className="text-muted">
                          Erbil
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="px-3 mb-4">
                    <Card className="py-4 docs" as={Link} to="/doctor">
                      <Card.Body>
                        <img src={defimg} className="image-fluid " alt="" />
                        <Card.Title className="mt-2 mb-3">
                          Doktor Adi
                        </Card.Title>
                        <Card.Subtitle className="text-muted">
                          Erbil
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="px-3 mb-4">
                    <Card className="py-4 docs" as={Link} to="/doctor">
                      <Card.Body>
                        <img src={defimg} className="image-fluid " alt="" />
                        <Card.Title className="mt-2 mb-3">
                          Doktor Adi
                        </Card.Title>
                        <Card.Subtitle className="text-muted">
                          Erbil
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="px-3 mb-4">
                    <Card className="py-4 docs" as={Link} to="/doctor">
                      <Card.Body>
                        <img src={defimg} className="image-fluid " alt="" />
                        <Card.Title className="mt-2 mb-3">
                          Doktor Adi
                        </Card.Title>
                        <Card.Subtitle className="text-muted">
                          Erbil
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="px-3 mb-4">
                    <Card className="py-4 docs" as={Link} to="/doctor">
                      <Card.Body>
                        <img src={defimg} className="image-fluid " alt="" />
                        <Card.Title className="mt-2 mb-3">
                          Doktor Adi
                        </Card.Title>
                        <Card.Subtitle className="text-muted">
                          Erbil
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              )}
            </div>
            <div className="mt-2 d-flex justify-content-end">
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={20}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePaginate}
                containerClassName={"pagination justify-content-center "}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          </Col>
          <Col lg={3}>
            <div className="doctors-right">
              <h4 className="mb-5">Son Kayitlar</h4>
              <Link
                className="d-flex justify-content-start align-items-center mb-3 skhover"
                to="/doctor"
              >
                <div>
                  <img
                    src={defimg}
                    className="image-fluid sk-img me-3"
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="m-0">Name </h6>
                  <p className="text-muted m-0">Istanbul</p>
                </div>
              </Link>
              <Link
                className="d-flex justify-content-start align-items-center mb-3 skhover"
                to="/doctor"
              >
                <div>
                  <img
                    src={defimg}
                    className="image-fluid sk-img me-3"
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="m-0">Name </h6>
                  <p className="text-muted m-0">Istanbul</p>
                </div>
              </Link>
              <Link
                className="d-flex justify-content-start align-items-center mb-3 skhover"
                to="/doctor"
              >
                <div>
                  <img
                    src={defimg}
                    className="image-fluid sk-img me-3"
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="m-0">Name </h6>
                  <p className="text-muted m-0">Istanbul</p>
                </div>
              </Link>
              <Link
                className="d-flex justify-content-start align-items-center mb-3 skhover"
                to="/doctor"
              >
                <div>
                  <img
                    src={defimg}
                    className="image-fluid sk-img me-3"
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="m-0">Name </h6>
                  <p className="text-muted m-0">Istanbul</p>
                </div>
              </Link>
              <Link
                className="d-flex justify-content-start align-items-center mb-3 skhover"
                to="/doctor"
              >
                <div>
                  <img
                    src={defimg}
                    className="image-fluid sk-img me-3"
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="m-0">Name </h6>
                  <p className="text-muted m-0">Istanbul</p>
                </div>
              </Link>
              <Link
                className="d-flex justify-content-start align-items-center mb-3 skhover"
                to="/doctor"
              >
                <div>
                  <img
                    src={defimg}
                    className="image-fluid sk-img me-3"
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="m-0">Name </h6>
                  <p className="text-muted m-0">Istanbul</p>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Doctors;
