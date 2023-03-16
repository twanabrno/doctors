import React from "react";
import { ErrorMessage } from "formik";
import { Form, Select } from "antd";
import TextError from "./TextError";
const { Option } = Select;

const SelectInpute = (props) => {
  const { label, name, formik, options, ...rest } = props;
  return (
    <Form.Item className="mb-4">
      <Select
        className="w-100"
        size="large"
        name={name}
        value={formik.initialValues[`${name}`] || null}
        {...rest}
        placeholder={label}
        onChange={(value) => formik.setFieldValue(name, value)}
        onBlur={() => formik.setFieldTouched(name, true)}
      >
        {options.map((option) => {
          return (
            <Option key={option.value} value={option.value}>
              {option.value}
            </Option>
          );
        })}
      </Select>
      <ErrorMessage name={name} label={label} component={TextError} />
    </Form.Item>
  );
};

export default SelectInpute;
