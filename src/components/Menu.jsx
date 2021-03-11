import React from "react";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/logo-120.png";

const Menu = () => {
  return (
    <NavBar expand="lg" bg="dark" variant="dark">
      <NavBar.Brand href="/">
        <img
          src={logo}
          alt="Boot Up Web Professionals logo"
          height="30"
          width="30"
          className="d-inline-block align-top"
        />
        {""}
        Boot Up Web Professionals
      </NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/BootUp">Boot Up</Nav.Link>
          <Nav.Link href="/Shop">Shop</Nav.Link>
          <Nav.Link href="/Services">Web Services</Nav.Link>
          <Nav.Link href="/Schedule">Request a Consultation</Nav.Link>
          <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/Faqs">FAQs</Nav.Link>
          <Nav.Link href="/Contact">Contact Us</Nav.Link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
};

export default Menu;