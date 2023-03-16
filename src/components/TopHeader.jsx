import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { ImWarning } from "react-icons/im";
import { FiLogOut,FiLogIn } from "react-icons/fi";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { SiKnowledgebase } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

import "../Assets/Style.css";
export const TopHeader = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  // console.log(auth.user);

  return (
    <div id="topheader">
      <Container>
        <Row>
          <Col className="col-md-6 col-sm-6 col-xs-12 py-1 top-domain">
            <a href="mailto:twana.brno@gmail.com">twana.brno@gmail.com</a>
          </Col>
          <Col className="col-md-6 col-sm-6 col-xs-12"></Col>
          <div className="top_right_links2-bg d-none d-lg-block">
            <div className="top_right_links2 ps-4">
              <Link to="/aboutus">
                <SiKnowledgebase className="mx-2" />
                About Us
              </Link>
              <div className="border"></div>
              <Link to="/">
                <ImWarning className="mx-2" />
                Warning
              </Link>
              {auth.user ? (
                <>
                  <span
                    onClick={() => {
                      navigate("/myaccount");
                    }}
                    className="signUpbt ms-4"
                  >
                    <RiAccountPinCircleFill className="mx-2" />
                    Me
                  </span>
                  <span
                    onClick={() => {
                      auth.logout();
                      console.log(auth.user);
                      navigate("/login");
                    }}
                    className="signUpbt ms-4"
                  >
                    <FiLogOut className="mx-2" />
                    Log out
                  </span>
                </>
              ) : (
                <>
                  <span
                    onClick={() => {
                      navigate("/signup");
                    }}
                    className="signUpbt ms-4"
                  >
                    <MdOutlineManageAccounts className="mx-2" />
                    Sign Up
                  </span>
                  <span
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="signUpbt ms-4"
                  >
                    <FiLogIn className="mx-2" />
                    Log in
                  </span>
                </>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
