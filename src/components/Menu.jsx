import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const Menu = () => {
    return (
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/">Boot Up Web Professionals</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/#aboutus">About Us</Nav.Link>
            <Nav.Link href="/">Boot Up</Nav.Link>

            <NavDropdown title="Client Portal" id="basic-nav-dropdown">
          <NavDropdown.Item href="/emaildesign">Email Blast Design</NavDropdown.Item>
          <NavDropdown.Item href="/seoimprovement">SEO Improvement</NavDropdown.Item>
          <NavDropdown.Item href="/revamp">Website Revamps</NavDropdown.Item>
        </NavDropdown>

            <Nav.Link href="/#request-a-quote">Request a Quote</Nav.Link>
            <Nav.Link href="/Request">Schedule a Consultation</Nav.Link>
            <Nav.Link href="/#websitedesigns">Website Designs</Nav.Link>
            <Nav.Link href="/Faqs">FAQs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default Menu;