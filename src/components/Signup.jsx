import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Formik, Form, FieldArray } from "formik";
import FormikController from "../components/Forms/FormikController";
import BranchesSelect from "./Forms/BranchesSelect";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { Link } from "react-router-dom";

import "../Assets/Login.css";

YupPassword(Yup);

const Signup = () => {
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
  const emptyPhoneNumber = { add: "", pn: "" };
  const Add = { addr: "", phone: "" };
  const Graduated = { university: "", year: "", certificateNo: "" };
  const initialValues = {
    firstName: "",
    lastName: "",
    situation: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
    city: "",
    town: "",
    address: [Add],
    graduatedUniversity: [Graduated],
    mainBranch: "",
    branch: "",
    about: "",
    web: "",
    facebook: "",
    twitter: "",
    picture: "",
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
    address: Yup.array(
      Yup.object({
        addr: Yup.string().required(),
        phone: Yup.string()
          .matches(phoneRegExp, "Phone number is not valid")
          .required("Required"),
      })
    ),
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
    facebook: Yup.string().matches(
      urlExp,
      "Enter Url exp: example@example.com"
    ),
    twitter: Yup.string().matches(urlExp, "Enter Url exp: example@example.com"),
    picture: Yup.mixed().required("You need to provide a file"),
  });
  const handleSubmit = (values, onSubmitProps) => {
    console.log(values);
    setTimeout(() => onSubmitProps.setSubmitting(false), 3000);
  };

  return (
    <div className="signup">
      <Container className="cont px-5">
        <h5 className="mb-3 ms-4">Sign Up</h5>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount
        >
          {(formik) => (
            <Form className="px-4">
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
                label="Password"
                formik={formik}
              />
              <FormikController
                control="input"
                type="password"
                name="passwordConfirm"
                label="Confirm Password"
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
              <FieldArray name="address">
                {({ push, remove }) => {
                  return (
                    <React.Fragment>
                      {formik.values.address.map((_, index) => (
                        <Container fluid  key={index}><Row >
                        <Col sm={6}>
                          <FormikController
                            control="input"
                            type="text"
                            name={`address.${index}.addr`}
                            label="Address"
                            formik={formik}
                          />
                        </Col>
                        <Col sm={4}>
                          <FormikController
                            control="input"
                            type="text"
                            name={`address.${index}.pn`}
                            label="Phone"
                            formik={formik}
                          />
                        </Col>
                        <Col sm={2} className="text-end">
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
                      </Row></Container>
                      ))}
                    </React.Fragment>
                  );
                }}
              </FieldArray>
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
                        <Container fluid key={index}><Row >
                        <Col sm={6}>
                          <FormikController
                            control="input"
                            type="text"
                            name={`graduatedUniversity.${index}.university`}
                            label="Graduated University"
                            formik={formik}
                          />
                        </Col>
                        <Col sm={2}>
                          <FormikController
                            control="input"
                            type="text"
                            name={`graduatedUniversity.${index}.year`}
                            label="Year"
                            formik={formik}
                          />
                        </Col>
                        <Col sm={2}>
                          <FormikController
                            control="input"
                            type="text"
                            name={`graduatedUniversity.${index}.certificateNo`}
                            label="No"
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
                      </Row></Container>
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
              <FormikController
                control="input"
                type="file"
                name="picture"
                label="Picture"
                formik={formik}
              />
              <button
                type="submit"
                className="book-contact-btn colored-bg btn btn-primary w-100 "
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-2 quest">
          Already have account?
          <span>
            <Link to="/login" className="signup-link mx-1">
              Login
            </Link>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
