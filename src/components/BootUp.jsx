import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col} from "react-bootstrap";

import Slideshow from "./Slideshow";
import ServiceLink from "./ServiceLink";
import DesignChart from "./DesignChart";
import EcommerceWebsite from "./EcommerceWebsite";
import ContactButton from "./ContactButton";
import BookingWebsite from "./BookingWebsite";
import InformationalWebsite from "./InformationalWebsite";

const BootUp = () => {
  return (
    <div>
      <div className="page-description">
        <h1>Boot Up</h1>
        <p>Jump Start Your Website</p>
      </div>
      {/* the web design service blog begins here */}
      
      <Card className="service-card">
  <Card.Header as="h5">Services</Card.Header>
  <Card.Body>
    <Card.Title>Website Designs</Card.Title>
    <Card.Text>
    Boot Up Web Professionals design WordPress websites that are 100% responsive for Desktop, Laptop, Tablet, and Mobile. Your website comes with a full e-commerce integration including:
    </Card.Text>
    <Button variant="outline-dark">
       <Link to="/WebsiteDesigns">Learn More</Link>
        </Button>
  </Card.Body>
</Card>
      <ServiceLink />
<Container>
  <Row>
    <Col>
    <EcommerceWebsite />
    </Col>
    <Col>
    <InformationalWebsite/>
    </Col>
    <Col>
    <BookingWebsite />
    </Col>
  </Row>
</Container>
      <DesignChart />
      <Slideshow />
      <ContactButton />
    </div>
  );
};
export default BootUp;