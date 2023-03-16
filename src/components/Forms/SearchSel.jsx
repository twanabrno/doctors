import React from "react";
import { Form,Select } from "antd";
import { ErrorMessage } from "formik";
import TextError from "./TextError";

const { Option } = Select;

const SearchSel = (props) => {
  const { label, name, options ,formik, ...rest } = props;
  console.log(formik);
  return (
    <Form.Item className="mb-3">
      <Select
      showSearch
      size="large"
      optionFilterProp="children"
      placeholder={label}
      value={formik.values[`${name}`]||null}
      name={name}
      defaultActiveFirstOption={false}
      onChange={(value) => formik.setFieldValue(name, value)}
      onBlur={() => formik.setFieldTouched(name, true)}
    >
        {options.map((option) => {
          return (
            <Option key={option.value} value={option.value}>
              {option.key}
            </Option>
          );
        })}
      </Select>
      <ErrorMessage name={name} component={TextError} />
    </Form.Item>
  );
};

export default SearchSel;
