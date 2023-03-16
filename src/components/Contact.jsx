import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../components/Forms/FormikController";

import "../Assets/Contact.css";

const city = [
  { key: "option 1", value: "option1" },
  { key: "option 2", value: "option2" },
  { key: "option 3", value: "option3" },
  { key: "option 4", value: "option4" },
];
const Contact = () => {
  const initialValues = {
    whoYouAre: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    whoYouAre: Yup.string().required("Required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invailed email format"),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Container className="contact">
        <Row>
          <Col lg={6}>
            <h5 className="mb-4">Contact</h5>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validateOnMount
            >
              {(formik) => (
                <Form className="w-100">
                  <FormikController
                    control="select"
                    options={city}
                    formik={formik}
                    name="whoYouAre"
                    label="Please Tell Us Who You Are"
                  />
                  <FormikController
                    control="input"
                    type="text"
                    name="email"
                    label="Email"
                    formik={formik}
                  />
                  <FormikController
                    control="textarea"
                    name="message"
                    rows="8"
                    label="Message"
                  />
                  <div>
                    <Button variant="primary" type="submit">
                      Send
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
          <Col lg={6} className="p-5">
            <div>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101175.46749128753!2d36.896768!3d37.584896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ddd0a3f4a6a67%3A0x524b2efc52349117!2zS2FocmFtYW5tYXJhxZ8gU8O8dMOnw7wgxLBtYW0gVW5pdmVyc2l0eQ!5e0!3m2!1sen!2str!4v1642762526700!5m2!1sen!2str"
                width="100%"
                height="300px"
                style={{ borderRadius: "5px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
