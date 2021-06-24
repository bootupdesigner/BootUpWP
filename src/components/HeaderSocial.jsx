import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";

const HeaderSocial = () => {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link
          className="header-social-link"
          href="https://www.twitter.com/bootupdesigners"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} size="sm" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="header-social-link"
          href="https://www.facebook.com/bootupwebdesigns/"
        >
          <FontAwesomeIcon icon={["fab", "facebook-f"]} size="sm" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="header-social-link"
          href="https://www.linkedin.com/in/curtis-shepard-2a3654181/"
        >
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="sm" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default HeaderSocial;
