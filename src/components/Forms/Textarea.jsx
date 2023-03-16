import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Textarea = (props) => {
  const { label, name, rows = "4", ...rest } = props;

  return (
    <div className="mb-4">
      <Field
        as="textarea"
        id={name}
        placeholder={label}
        name={name}
        rows={rows}
        {...rest}
        className="form-control"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Textarea;
