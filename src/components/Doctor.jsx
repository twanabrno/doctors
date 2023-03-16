import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Tabs, Radio, Select } from "antd";
import { Comments } from "./Comments";

import { IoLocation } from "react-icons/io5";
import { BiShieldQuarter, BiHistory } from "react-icons/bi";
import { MdCameraAlt } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { FaAddressCard, FaGraduationCap, FaBandAid } from "react-icons/fa";

import docimg from "../Assets/img/pngs/doctor1.jpg";
import "../Assets/Doctor.css";
import DateSlider from "./subcompenents/DateSlider";
const { Option } = Select;

const Doctor = () => {
  const [addresses, setAddress] = useState([
    {
      key: "address1",
      value: `11Fatih Mahallesi Mareşal Fevzi Çakmak Bulvarı Pembegül Apartmanı No : 89 / B, 
      Gaziantep Op. Dr. Fuat AKSOY Kadın Hastalıkları ve Doğum Kliniği`,
    },
    {
      key: "address2",
      value: `22Fatih Mahallesi Mareşal Fevzi Çakmak Bulvarı Pembegül Apartmanı No : 89 / B, 
      Gaziantep Op. Dr. Fuat AKSOY Kadın Hastalıkları ve Doğum Kliniği`,
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState(addresses[0].key);
  const handleRadioAddress = (e) => {
    setSelectedAddress(e.target.value);
  };
  const handleAddressChange = (e) => {
    setSelectedAddress(e);
  };
  return (
    <>
      <Container>
        <Row className="py-5">
          <Col lg={7} className="left px-3">
            <div className="doctor-card">
              <div className="d-flex justify-content-start">
                <div>
                  <img src={docimg} className="image-fluid doc-img" alt="" />
                </div>
                <div className="w-100 px-5">
                  <div className="d-flex justify-content-between w-100">
                    <div>
                      <h4>Doctor Name</h4>
                    </div>
                    <div>
                      <a>
                        <AiOutlineStar className="fav-icon" />
                      </a>
                    </div>
                  </div>
                  <div className="mb-2 mt-1">
                    <a href="http://"> Branches</a>
                  </div>
                  <Button className="w-100 my-2">Randevu Al</Button>
                  <Row>
                    <Col sm={6}>
                      <Button className="w-100" variant="outline-primary">
                        Ara
                      </Button>
                    </Col>
                    <Col sm={6}>
                      <Button className="w-100" variant="outline-primary">
                        Mesaj
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
              <Tabs
                defaultActiveKey="1"
                items={[
                  {
                    label: `Addresses`,
                    key: "1",
                    children: (
                      <Addresses
                        handleRadioAddress={handleRadioAddress}
                        selectedAddress={selectedAddress}
                        addresses={addresses}
                      />
                    ),
                  },
                  {
                    label: `About`,
                    key: "2",
                    children: <About />,
                  },
                  {
                    label: `Comments`,
                    key: "3",
                    children: <Comments />,
                  },
                ]}
              />
            </div>
          </Col>
          <Col lg={5}>
            <h6 className="b-header">Book an appointment</h6>
            <div className="right">
              <div className="adress">
                <p className="text-muted">Adress</p>
                <Select
                  value={selectedAddress}
                  className="w-100"
                  size="large"
                  onChange={handleAddressChange}
                >
                  {addresses.map((option) => {
                    return (
                      <Option key={option.key} value={option.key}>
                        {option.value}
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <hr />
              <p>Appointment Date</p>
              <DateSlider />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Doctor;

export const About = () => {
  return (
    <div className="about pt-2">
      <div className="d-flex align-items-start pt-2 pb-1">
        <div className="icons d-flex align-items-start pe-3 text-muted">
          <FaAddressCard />
        </div>
        <div>
          <h6>Hakkımda</h6>
          <p className="text-muted">
            Opr.Dr. Fuat Aksoy 1995 yılında Çukurova Üniversitesi Tıp
            Fakültesi’nden mezun olmuştur.2003 yılında Gaziantep Üniversitesi
            Tıp Fakültesi’nde uzmanlık eğitimini tamamlamış ve 2007 yılında
            Ankara Üniversitesi Tıp Fakültesi Kadın Hastalıkları ve Doğum
            Bölümünde İnfertilite ve Tüp Bebek eğitimini tamamlayan Fuat Aksoy
            kendi özel muayenehanesinde hastalarına hizmet vermektedir.
          </p>
        </div>
      </div>
      <hr className="m-0 " />
      <div className="d-flex pt-2 pb-1">
        <div className="d-flex align-items-start icons pe-3 text-muted">
          <FaBandAid className="mt-0" />
        </div>
        <div>
          <h6>Fields</h6>
          <ul className="list-unstyled text-muted">
            <li>Fuat Aksoy Muayenehanesi</li>
            <li>Fuat Aksoy Muayenehanesi</li>
            <li>Fuat Aksoy Muayenehanesi</li>
          </ul>
        </div>
      </div>
      <hr className="m-0" />
      <div className="d-flex pt-2 pb-1">
        <div className="d-flex align-items-start icons pe-3 text-muted">
          <FaGraduationCap className="mt-0" />
        </div>
        <div>
          <h6>Education</h6>
          <ul className="list-unstyled text-muted">
            <li>Fuat Aksoy Muayenehanesi</li>
            <li>Fuat Aksoy Muayenehanesi</li>
            <li>Fuat Aksoy Muayenehanesi</li>
          </ul>
        </div>
      </div>
      <hr className="m-0" />
      <div className="d-flex pt-2 pb-1">
        <div className="d-flex align-items-start icons pe-3 text-muted">
          <BiHistory className="mt-0" />
        </div>
        <div>
          <h6>Experiences</h6>
          <ul className="list-unstyled text-muted">
            <li>Fuat Aksoy Muayenehanesi</li>
            <li>Fuat Aksoy Muayenehanesi</li>
            <li>Fuat Aksoy Muayenehanesi</li>
          </ul>
        </div>
      </div>
      <hr className="m-0" />
      <div className="d-flex pt-2 pb-1">
        <div className="d-flex align-items-start icons pe-3 text-muted">
          <MdCameraAlt className="mt-0" />
        </div>
        <div>
          <h6>photos</h6>
          <Container fluid className="w-100">
            <Row>
              <Col sm={2}>
                <img src={docimg} className="gallery-imgs img-fluid" alt="" />
              </Col>

              <Col sm={2}>
                <img src={docimg} className="gallery-imgs img-fluid" alt="" />
              </Col>

              <Col sm={2}>
                <img src={docimg} className="gallery-imgs img-fluid" alt="" />
              </Col>

              <Col sm={2}>
                <img src={docimg} className="gallery-imgs img-fluid" alt="" />
              </Col>
              <Col sm={2}>
                <img src={docimg} className="gallery-imgs img-fluid" alt="" />
              </Col>
              <Col sm={2}>
                <img src={docimg} className="gallery-imgs img-fluid" alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export const Addresses = ({
  addresses,
  selectedAddress,
  handleRadioAddress,
}) => {
  return (
    <div className="address">
      <Radio.Group onChange={handleRadioAddress} value={selectedAddress}>
        <Radio.Button value="address1">Address 1</Radio.Button>
        <Radio.Button value="address2">Address 2</Radio.Button>
      </Radio.Group>
      {addresses.length > 0 &&
        addresses.map((addr) => {
          return (
            <React.Fragment key={addr.key}>
              {addr.key == selectedAddress && (
                <div className="pt-4">
                  <div className="d-flex align-items-start pt-2 pb-1">
                    <div className="icons d-flex align-items-start pe-2 text-muted">
                      <IoLocation />
                    </div>
                    <div>
                      <p className="text-muted">{addr.value}</p>
                    </div>
                  </div>
                  <hr className="m-0 ms-4" />
                  <div className="d-flex pt-2 pb-1">
                    <div className="d-flex align-items-start icons pe-2 text-muted">
                      <BiShieldQuarter className="mt-0" />
                    </div>
                    <div>
                      <p className="text-muted">Sigortasız hastalar</p>
                    </div>
                  </div>
                  <hr className="m-0 ms-4" />
                </div>
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
};
