import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../Assets/AddAppointment.css";
import FormikController from "./Forms/FormikController";
import { IoLocation } from "react-icons/io5";
import { BiShieldQuarter } from "react-icons/bi";

const AddAppointment = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    phonenumber: "",
    message: "",
    about: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    surname: Yup.string().required("Required"),
    email: Yup.string().email("Invailed email format").required("Required."),
    phonenumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    about: Yup.string().required(),
  });

  const handleSubmit = (values, onSubmitProps) => {
    console.log(values);
    setTimeout(() => onSubmitProps.setSubmitting(false), 3000);
  };
  return (
    <section className="appointment">
      <Container>
        <Row className="py-5">
          <Col className="left px-5">
            <h4>Book an Appointment</h4>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validateOnMount
            >
              {(formik) => (
                <Form>
                  <Row>
                    <div className="personal-info mt-5">
                      <h6>Personal</h6>
                      <FormikController
                        control="input"
                        type="text"
                        name="firstName"
                        label="First Name"
                        formik={formik}
                      />
                      <FormikController
                        control="input"
                        type="text"
                        name="lastName"
                        label="Last Name"
                        formik={formik}
                      />
                    </div>
                    <div className="contact-info ">
                      <h6>Conatact</h6>
                      <FormikController
                        control="input"
                        type="email"
                        name="email"
                        label="Email"
                        formik={formik}
                      />
                      <FormikController
                        control="input"
                        type="text"
                        name="phoneNumber"
                        label="Phone Number"
                        formik={formik}
                      />
                    </div>
                    <div className="about-info ">
                      <h6>additional information for the expert</h6>
                      <FormikController
                        control="textarea"
                        name="about"
                        label="About"
                        rows="5"
                        formik={formik}
                      />
                    </div>
                  </Row>
                  <button
                    type="submit"
                    className="book-contact-btn colored-bg btn btn-primary w-100 "
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Continue
                  </button>
                </Form>
              )}
            </Formik>
          </Col>
          <Col className="right">
            <div className="right-card">
              <div className="d-flex align-items-start pt-2 pb-1">
                <div className="icons  me-2 text-muted">
                  <IoLocation />
                </div>
                <div>
                  <p className="text-muted">test test</p>
                </div>
              </div>
              <div className="d-flex pt-2 pb-1">
                <div className=" me-2 text-muted">
                  <BiShieldQuarter  />
                </div>
                <div>
                  <p className="text-muted">Sigortasız hastalar</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddAppointment;
