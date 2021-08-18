import React from "react";
import Form from 'react-bootstrap/Form'
import { Row, Col, Button } from "react-bootstrap";

const Contact = () => {
    return(
        <div>
            <h2 className="text-center" id="request-a-quote">Request a Quote</h2>
        <Form action="https://formspree.io/f/mrgopjod" method="POST" className="mx-3">
          <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text" placeholder="first name" required />
            </Form.Group>
            </Col>

            <Col md={6}>
            <Form.Group className="mb-3" controlId="lastName">
             <Form.Label>Last Name:</Form.Label>
             <Form.Control type="text" placeholder="last name" required />
             </Form.Group>
             </Col>

              <Col md={6}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="address@email.com" required />
              
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="phone">
             <Form.Label>Phone</Form.Label>
             <Form.Control type="text" placeholder="(555)555-5555)" required  />
             </Form.Group>
             </Col>

             <Col md={12}>
            <Form.Group className="mb-3" controlId="websiteDetails">
              <Form.Label>Tell us about your website needs:</Form.Label>
              <Form.Control as="textarea" rows={6} required />
            </Form.Group>
            </Col>

            <Col md={12}>
            <Form.Text className="text-muted">
              Your email and phone number will never be share
              </Form.Text>
              <Form.Group className="mb-3">
                <Button type="submit">Submit</Button>
              </Form.Group>
              </Col>
          </Row>
        </Form>
        </div>
    )
}

export default Contact;