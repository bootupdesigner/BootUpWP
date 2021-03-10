import react from "react";
import WebServices from "./WebServices";
import ContactButton from "./ContactButton";

import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <div className="page-description">
        <h1>Web Services</h1>
        <p>Web Services Make Your Business Easier</p>
      </div>
      {/* card number one */}
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
{/* card number two */}
<Card className="service-card">
  <Card.Header as="h5">Services</Card.Header>
  <Card.Body>
    <Card.Title>SEO Improvements</Card.Title>
    <Card.Text>
    Your SEO results are populated by more than your website alone, developing your presence on the internet improves your SEO. Our E-Commerce Design Specialist...
    </Card.Text>
    <Button variant="outline-dark">
       <Link to="/SeoImprovements">Learn More</Link>
        </Button>
  </Card.Body>
</Card>
      <div className="startups" style={{textAlign: "center", display: "block", width: "100%"}}>
        <h3>Business Startups</h3>
        <p style={{padding: "0px 10vw 0px 10vw"}}>Boot Up Web Professionaionals offers a number of services to help jump start you business or creative idea. We'll provide you with Limitied Liability Company filings (LLC), Employer ID Number(EIN), Vendors Tax ID, Vendors List, Logos, and a <i>WEBSITE!</i></p>
      </div>
      <WebServices />
    < ContactButton/>
    </div>
  );
};

export default Services;
