import { Select } from "antd";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ErrorMessage } from "formik";
import TextError from "./TextError";
const { Option } = Select;
const mainBranch = ["Zhejiang", "Jiangsu"];
const branch = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
};
const BranchesSelect = (props) => {
  const { label1, label2, name1, name2, formik, mode, ...rest } = props;
  
  const [chosenBranchesList, setChosenBranchesList] = useState(
    branch[formik.values[`${name1}`]] || []
  );
  const [chosenbranches, setChosenbranches] = useState(
    formik.values[`${name2}`] || []
  );

  const handleMainBranch = (value) => {
    setChosenBranchesList(branch[value]);
    setChosenbranches(branch[value][0]);
    formik.setFieldValue(name1, value);
  };

  const handleBranch = (value) => {
    setChosenbranches(value);
    formik.setFieldValue(name2, value);
  };
  return (
    <Container fluid className="px-0">
      <Row className="mb-3">
        <Col sm={6}>
          <Select
            size="large"
            name={name1}
            value={formik.values[`${name1}`] || null}
            className="w-100"
            placeholder={label1}
            onChange={handleMainBranch}
            onBlur={() => formik.setFieldTouched(name1, true)}
          >
            {mainBranch.map((mbr) => (
              <Option key={mbr}>{mbr}</Option>
            ))}
          </Select>
          <ErrorMessage name={name1} component={TextError} />
        </Col>
        <Col sm={6}>
          <Select
            showArrow
            mode={mode}
            size="large"
            name={name2}
            className="w-100"
            value={chosenbranches}
            placeholder={label2}
            onChange={handleBranch}
            onBlur={() => formik.setFieldTouched(name2, true)}
          >
            {chosenBranchesList.length > 0 &&
              chosenBranchesList.map((brn) => <Option key={brn}>{brn}</Option>)}
            {chosenBranchesList.length == 0 && (
              <Option disabled>Please Choose Main Branch first</Option>
            )}
          </Select>
          <ErrorMessage name={name2} component={TextError} />
        </Col>
      </Row>
    </Container>
  );
};
export default BranchesSelect;
