import React from "react";
import { Row, Col } from "react-bootstrap";


const AboutUs = () => {
    return(
        <div>
            <h2 className="text-center" id="aboutus">What We Offer</h2>
            <Row className="justify-content-center mx-3">
                <Col md={4} sm={6}>
                  <h3 className="text-center">About Us</h3>
                  <p>Designing a website is like purchasing your dream home. Style it, decorate it, invite guest and scale it to your business needs. Your website becomes a resource tool available to you, your customers and your employees.</p>
                </Col>
                <Col md={4} sm={6}>
                  <h3 className="text-center">What's Included</h3>
                  <ul>
                    <li>SSL Certificate</li>
                    <li>Search Engine Optimization</li>
                    <li>100% Responsive</li>
                    <li>Backup & Restore</li>
                    <li>PayPal and/or Credit Card Checkout</li>
            <li>Customer Relationship Management</li>
          </ul>
                </Col>
            </Row>
        </div>
    )
}

export default AboutUs;