import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactButton = () => {
    return(
<div className="servicelink">
        <Button variant="outline-dark">
          <Link to="/Contact">Contact Us</Link>
        </Button>
      </div>
    )
}
export default ContactButton