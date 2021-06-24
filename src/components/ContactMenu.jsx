import React from "react";
import Nav from "react-bootstrap/Nav";
import HeaderSocial from "./HeaderSocial";

const ContactMenu = () => {
  return (
    <Nav className="d-flex justify-content-between">
      <Nav.Item>
        <Nav.Link href="mailto:bootup.itinfo@gmail.com">
          Contact Us
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <HeaderSocial />
      </Nav.Item>
    </Nav>
  );
};

export default ContactMenu;
