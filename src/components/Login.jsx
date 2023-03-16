import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "./Forms/FormikController";
import { useAuth } from "../auth";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.path?.state || "/";
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invailed email format").required("Required"),
    password: Yup.string().password().required("Required"),
  });
  const onSubmit = (values, onSubmitProps) => {
    auth.login(values.email);
    onSubmitProps.setSubmitting(false);
    navigate(redirectPath, { replace: true });
  };

  useEffect(() => {
    if (auth.user) {
      console.log("login");
      navigate("/", { replace: true });
    }
  });
  return (
    <div className="login-body d-flex align-items-center">
      <div className="login-form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => (
            <Form>
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
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Log in
              </button>
              <div className="mt-2 quest">
                Don't have account?
                <span>
                  <Link to="/signup" className="signup-link mx-1">
                    Sign UP
                  </Link>
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Login;
