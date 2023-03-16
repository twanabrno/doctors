import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown ,DropdownButton} from "react-bootstrap";
import logo from "../Assets/img/logo.png";

import "../Assets/Style.css";

const NvBar = () => {
  return (
    <Navbar sticky="top" expand="lg" id="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="image-fluid logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="navbar-pd">
            <NavLink className="nav-link mx-lg-2 mx-1" to="/">
              Home
            </NavLink>
            <NavDropdown title="Guid" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/branches">
                Branches
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/dentistbranches">
                Dentist
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Doctors" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/doctors">
                Ankara Doctors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/doctors">
                Istanbul Doctors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/doctors">
                K.maras Doctors
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/doctors">
                General Health
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/doctors">
                Women's Health
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/doctors">
                Male Health
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/doctors">
                Child Health
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/doctors">
                Dental Health
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="me-0"
              title="Contact"
              id="dropdown-menu-align-responsive-2"
            >
              <NavDropdown.Item as={Link} to="/contact">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NvBar;
