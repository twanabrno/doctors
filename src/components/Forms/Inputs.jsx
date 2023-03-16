import React from "react";
import { Input } from "antd";
import { ErrorMessage } from "formik";
import TextError from "./TextError";

const Inputs = (props) => {
  const { label, formik, name, index, arr, la, size="large", ...rest } = props;
  return (
    <div className="mb-3">
      <Input
        size={size}
        id={name}
        name={name}
        {...rest}
        value={(arr ? formik.values[arr][index][la] : formik.values[name]) || null}
        placeholder={label}
        onChange={(e) => formik.setFieldValue(name, e.target.value)}
        onBlur={() => formik.setFieldTouched(name, true)}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Inputs;
