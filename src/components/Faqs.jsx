import React from "react";
import { Accordion, Card} from 'react-bootstrap';

import ServiceLink from "./ServiceLink";

const Faqs = () => {
  return (
    <div>
      <div className="page-description">
        <h1>FAQs</h1>
        <p>Frequently Asked Questions</p>
      </div>
      <h2 className="text-center">You've got Questions, We've got Answers<i>!</i></h2>
      <Accordion defaultActiveKey="0" style={{width: "75vw", display: "block", margin: "10px auto"}}>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
        What's included in your maintenance plan?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <ul>
          <li>Submit up to 24 product uploads each month, please include the Product Title, Description, Product Photo, Quantities, Product Category, Sizes, Colors, Weight, Dimensions,and Shipping Rates. Product uploads may take up to 72 business hours to complete. For the best service please submit your product early as to not miss any deadlines such as product release dates or sales. Limit is 12 product uploads per upload submission.</li>
          <li>2 coupon creations each month, although you have access to create coupons on your own, if you don’t have time or just want to leave it to the professionals, we’ll create the coupons for you. Our Standard website allows basic coupons such as store wide discounts, to access dynamic coupons such as BOGO, please contact a representative.</li>
          <li>3 blog posts each month. Want to share your success, upcoming events, or company new with your customers? Send us the details and we’ll upload your latest blog post for you.</li>
          <li>Image/Gallery Uploads and Video uploads</li>
          <li>Hosting ensures you website remains published</li>
          <li>A free SSL Certificate good for up to 30 days</li>
          <li>Backup & Restore</li>
          </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
        Subscriber Discounts
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>We’re happy to provide our customers 30% off  discounts for upgrading or marketing their website.
        <ul>
          <li>Website Revamps</li>
          <li>SEO Improvements</li>
          </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
        Turn Around Time
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>We’ll respond to your request within 24 hours of receipt. Work for your request will begin within 48 hours of receipt and may take up to 72 hours to complete, this does not include weekends. Please send all requests at minimum 5 days before you need them to ensure timely updates. <b style={{color: "red"}}>Emergency updates</b> will be handled with 4 hours of request submitted between 12:00pm – 7:00pm Weekdays and Weekend. Emergency requests include: failed payment, unsecure website, website down, products not showing, etc.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      <ServiceLink />
    </div>
  );
};
export default Faqs;
