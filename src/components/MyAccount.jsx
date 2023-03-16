import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Formik, Form, FieldArray } from "formik";
import FormikController from "../components/Forms/FormikController";
import BranchesSelect from "./Forms/BranchesSelect";
import * as Yup from "yup";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { MdOutlineModeEdit } from "react-icons/md";
import "../Assets/MyAccount.css";
import YupPassword from "yup-password";
import defimg from "../Assets/img/pngs/doctor1.jpg";
import { Select, Switch, Tabs } from "antd";
import moment from "moment";
const { Option } = Select;

const gender = [
  { key: "man", value: "Mr." },
  { key: "womam", value: "Mrs." },
];
const cities = [
  { key: "option 1", value: "option1" },
  { key: "option 2", value: "option2" },
  { key: "option 3", value: "option3" },
  { key: "option 4", value: "option4" },
];
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const urlExp =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
const Graduated = [
  { university: "ksu", year: "2022", certificateNo: "123" },
  { university: "ksu", year: "2023", certificateNo: "321" },
];
const initialValues = {
  firstName: "Twana",
  lastName: "Ahmed",
  situation: "Mr.",
  email: "twana.brno@gmail.com",
  password: "",
  passwordConfirm: "",
  phoneNumber: "5368304905",
  city: "Erbil 1",
  town: "Erbil 2",
  graduatedUniversity: Graduated,
  mainBranch: "Zhejiang",
  branch: ["Hangzhou", "Ningbo"],
  about: "about meeeeeeeee",
  web: "https://www.web.com/",
  facebook: "https://www.fb.com/",
  twitter: "https://www.tw.com/",
  picture: { defimg },
};
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  situation: Yup.string().required("Required"),
  email: Yup.string().email("Invailed email format").required("Required."),
  password: Yup.string().password().required("Required."),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required."),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  city: Yup.string().required(),
  town: Yup.string().required(),
  graduatedUniversity: Yup.array(
    Yup.object({
      university: Yup.string().required("Required"),
      year: Yup.string().required("Required"),
      certificateNo: Yup.string().required("Required"),
    })
  ),
  mainBranch: Yup.string().required(),
  branch: Yup.array().min(1).required(),
  about: Yup.string().required(),
  web: Yup.string().matches(urlExp, "Enter Url exp: example@example.com"),
  facebook: Yup.string().matches(urlExp, "Enter Url exp: example@example.com"),
  twitter: Yup.string().matches(urlExp, "Enter Url exp: example@example.com"),
  picture: Yup.mixed().required("You need to provide a file"),
});
const handleSubmit = (values, onSubmitProps) => {
  console.log(values);
  setTimeout(() => onSubmitProps.setSubmitting(false), 3000);
};

const MyAccount = () => {
  return (
    <section className="my-account py-4">
      <Container>
        <Row className="my-data ">
          <Col lg={1}></Col>
          <Col lg={10}>
            <Row>
              <div className="photo d-flex align-items-end">
                <img
                  src={initialValues.picture.defimg}
                  className="img-fluid"
                  alt=""
                />
                <a href="" className="photo-edit-icon">
                  <MdOutlineModeEdit />
                </a>
              </div>
            </Row>
            <Row className="mt-3">
              <Tabs
                defaultActiveKey="2"
                type="card"
                items={[
                  {
                    label: `Personal Info`,
                    key: "1",
                    children: <PersonalInfo />,
                  },
                  {
                    label: `Appointments`,
                    key: "2",
                    children: <Appointments />,
                  },
                ]}
              />
            </Row>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyAccount;

export const Appointments = () => {
  const durations = [
    { key: "half", value: "30 min" },
    { key: "full", value: "1 h" },
  ];
  const times = [];
  let start = moment(1).hour(9).minute(0).second(0);
  let end = moment(1).hour(18).minute(0).second(0);
  while (!start.isSame(end)) {
    times.push(start.format("HH:mm"));
    start.add(30, "m");
  }
  const Add =
      {
        phone: "",
        sat: {
          label: "Saturday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        sun: {
          label: "Sunday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        mon: {
          label: "Monday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        tue: {
          label: "Tuesday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        wed: {
          label: "Wednesday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        thu: {
          label: "Thursday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        fri: {
          label: "Friday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
      }
  const initV = {
    address: [{
        addr: "home",
        phone: "5368304905",
        sat: {
          label: "Saturday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        sun: {
          label: "Sunday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        mon: {
          label: "Monday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        tue: {
          label: "Tuesday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        wed: {
          label: "Wednesday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        thu: {
          label: "Thursday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
        fri: {
          label: "Friday",
          av: true,
          dur: "",
          from: "",
          to: "",
        },
      },
    ]
  };
  const handleDaysSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="daysofweek align-items-center">
        <h4>Your Availability</h4>
        <hr />
        <Formik initialValues={initV} onSubmit={handleDaysSubmit}>
          {(formik) => (
            <Form>
              <FieldArray name="address">
                {({ push, remove }) => {
                  return (
                    <>
                      {formik.values.address.map((_, index) => (
                        <div key={index}>
                          {console.log(formik.values.address)}
                          <Row>
                            <Col md={6}>
                              <FormikController
                                control="input"
                                type="text"
                                name={`address.${index}.addr`}
                                label="Address"
                                index={index}
                                arr="address"
                                la="addr"
                                size="default "
                                formik={formik}
                              />
                            </Col>
                            <Col md={6} className="d-flex justify-content-end">
                              {formik.values.address.length == index + 1 &&
                                formik.values.address.length != 1 && (
                                  <Button
                                    disabled={formik.isSubmitting}
                                    variant="danger"
                                    className="mx-1"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </Button>
                                )}

                              {formik.values.address.length == index + 1 &&
                                formik.values.address.length <= 2 && (
                                  <Button
                                    disabled={formik.isSubmitting}
                                    variant="success"
                                    onClick={() => push(Add)}
                                  >
                                    +
                                  </Button>
                                )}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <FormikController
                                control="input"
                                type="text"
                                name={`address.${index}.pn`}
                                index={index}
                                arr="address"
                                la="phone"
                                label="Phone"
                                size="default "
                                formik={formik}
                              />
                            </Col>
                          </Row>
                          <div className="mt-3 px-3">
                            <DaysDesign
                              index={index}
                              times={times}
                              formik={formik}
                              name="mon"
                              durations={durations}
                            />
                            <DaysDesign
                              index={index}
                              times={times}
                              formik={formik}
                              name="tue"
                              durations={durations}
                            />
                            <DaysDesign
                              index={index}
                              times={times}
                              formik={formik}
                              name="wed"
                              durations={durations}
                            />
                            <DaysDesign
                              index={index}
                              times={times}
                              formik={formik}
                              name="thu"
                              durations={durations}
                            />
                            <DaysDesign
                              index={index}
                              times={times}
                              formik={formik}
                              name="fri"
                              durations={durations}
                            />
                            <DaysDesign
                              index={index}
                              times={times}
                              formik={formik}
                              name="sat"
                              durations={durations}
                            />
                            <DaysDesign
                              index={index}
                              times={times}
                              formik={formik}
                              name="sun"
                              durations={durations}
                            />
                            <hr />
                          </div>
                        </div>
                      ))}
                    </>
                  );
                }}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export const DaysDesign = ({ formik, index = 0, name, times, durations }) => {
  const dis = formik.values.address[index][name]?.av;
  const nm = `address.${index}.${name}`;
  return (
    <Container fluid className="mb-4">
      <Row>
        <Col md={2}>
          <div className="d-flex">
            <div className="w-25">
            <Switch
              name={`${nm}.av`}
              size="small"
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked={`${nm}.av`}
              onChange={(value) => formik.setFieldValue(`${nm}.av`, value)}
              onBlur={() => formik.setFieldTouched(`${nm}.av`, true)}
            />
            </div>
            <h6 className="m-0 mx-3">{formik.values.address[0][name].label}</h6>
          </div>
        </Col>
        <Col>
          <div className="d-flex">
            <div className="d-flex w-33">
              <p className="m-0 mx-2">From:</p>
              <Select
                name={`${nm}.from`}
                size="small"
                disabled={!dis}
                placeholder="Available From"
                onChange={(e) => formik.setFieldValue(`${nm}.from`, e)}
              >
                {times.map((option) => {
                  return (
                    <Option name="from" key={option} value={option}>
                      {option}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div className="d-flex w-33">
              <p className="m-0 mx-2">To:</p>
              <Select
                name={`${nm}.to`}
                size="small"
                disabled={!dis || false}
                placeholder="Available To"
                onChange={(e) => formik.setFieldValue(`${nm}.to`, e)}
              >
                {times.map((option) => {
                  return (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div className="d-flex w-33">
              <p className="m-0 mx-2">Duration:</p>
              <Select
                name={`${nm}.dur`}
                size="small"
                disabled={!dis}
                placeholder="Duration"
                onChange={(e) => formik.setFieldValue(`${nm}.dur`, e)}
              >
                {durations.map((option) => {
                  return (
                    <Option key={option.key} value={option.value}>
                      {option.value}
                    </Option>
                  );
                })}
              </Select>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export const PersonalInfo = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount
    >
      {(formik) => (
        <Form>
          <Row>
            <Col md={2}>
              <FormikController
                control="select"
                name="situation"
                label="Situation"
                options={gender}
                formik={formik}
              />
            </Col>
            <Col md={5}>
              <FormikController
                control="input"
                type="text"
                name="firstName"
                label="First Name"
                formik={formik}
              />
            </Col>
            <Col md={5}>
              <FormikController
                control="input"
                type="text"
                name="lastName"
                label="Last Name"
                formik={formik}
              />
            </Col>
          </Row>
          <FormikController
            control="input"
            type="email"
            name="email"
            label="Email"
            formik={formik}
          />
          <FormikController
            control="input"
            type="password"
            name="password"
            label="New Password"
            formik={formik}
          />
          <FormikController
            control="input"
            type="password"
            name="passwordConfirm"
            label="Retype Password"
            formik={formik}
          />
          <FormikController
            control="input"
            type="text"
            name="phoneNumber"
            label="Phone Number"
            formik={formik}
          />
          <FormikController
            control="input"
            type="text"
            name="city"
            label="City"
            formik={formik}
          />
          <FormikController
            control="input"
            type="text"
            name="town"
            label="Town"
            formik={formik}
          />

          <BranchesSelect
            name1="mainBranch"
            name2="branch"
            label1="Main Branch"
            label2="Branch"
            mode="multiple"
            formik={formik}
          />
          <FieldArray name="graduatedUniversity">
            {({ push, remove }) => {
              return (
                <React.Fragment>
                  {formik.values.graduatedUniversity.map((_, index) => (
                    <Container fluid className="px-0" key={index}>
                      <Row>
                        <Col sm={6}>
                          <FormikController
                            control="input"
                            type="text"
                            name={`graduatedUniversity.${index}.university`}
                            label="Graduated University"
                            index={index}
                            arr="graduatedUniversity"
                            la="university"
                            formik={formik}
                          />
                        </Col>
                        <Col sm={2}>
                          <FormikController
                            control="input"
                            type="text"
                            name={`graduatedUniversity.${index}.year`}
                            label="Year"
                            index={index}
                            arr="graduatedUniversity"
                            la="year"
                            formik={formik}
                          />
                        </Col>
                        <Col sm={2}>
                          <FormikController
                            control="input"
                            type="text"
                            name={`graduatedUniversity.${index}.certificateNo`}
                            label="No"
                            index={index}
                            arr="graduatedUniversity"
                            la="certificateNo"
                            formik={formik}
                          />
                        </Col>
                        <Col sm={2} className="text-end">
                          {formik.values.graduatedUniversity.length ==
                            index + 1 &&
                            formik.values.graduatedUniversity.length > 1 && (
                              <Button
                                disabled={formik.isSubmitting}
                                variant="danger"
                                className="mx-1"
                                onClick={() => remove(index)}
                              >
                                -
                              </Button>
                            )}

                          {formik.values.graduatedUniversity.length ==
                            index + 1 &&
                            formik.values.graduatedUniversity.length <= 2 && (
                              <Button
                                disabled={formik.isSubmitting}
                                variant="success"
                                onClick={() => push(Graduated)}
                              >
                                +
                              </Button>
                            )}
                        </Col>
                      </Row>
                    </Container>
                  ))}
                </React.Fragment>
              );
            }}
          </FieldArray>
          <FormikController
            control="textarea"
            name="about"
            label="About"
            rows="5"
            formik={formik}
          />
          <FormikController
            control="input"
            type="text"
            name="web"
            label="Website"
            formik={formik}
          />
          <FormikController
            control="input"
            type="text"
            name="facebook"
            label="Facebook"
            formik={formik}
          />
          <FormikController
            control="input"
            type="text"
            name="twitter"
            label="Twitter"
            formik={formik}
          />
          <button
            type="submit"
            className="book-contact-btn colored-bg btn btn-primary w-100 "
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Update / Save
          </button>
        </Form>
      )}
    </Formik>
  );
};
