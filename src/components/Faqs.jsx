import React from "react";
import { Accordion } from 'react-bootstrap';


const Faqs = () => {
  return (
    <div>
      <div className="bg-secondary text-white text-center">
        <h1>FAQs</h1>
        <p>Frequently Asked Questions</p>
      </div>

      <h2 className="text-center">You've got Questions, We've got Answers<i>!</i></h2>

      <Accordion defaultActiveKey="0" style={{width: "75vw", display: "block", margin: "10px auto"}}>
      <Accordion.Item eventKey="0">
    <Accordion.Header>Whats included in your basic maintenance plan?</Accordion.Header>
    <Accordion.Body>
    <ul>
        <li>
        Request service up to 4 times each month. Costs of additional services may vary.
        </li>
          <li>Submit up to 24 product uploads each month, please include the Product Title, Description, Product Photo, Quantities, Product Category, Sizes, Colors, Weight, Dimensions,and Shipping Rates. Product uploads may take up to 72 business hours to complete. For the best service please submit your product early as to not miss any deadlines such as product release dates or sales. Limit is 12 product uploads per upload submission.</li>
          <li>2 coupon creations each month, although you have access to create coupons on your own, if you don’t have time or just want to leave it to the professionals, we’ll create the coupons for you. Our Standard website allows basic coupons such as store wide discounts, to access dynamic coupons such as BOGO, please contact a representative.</li>
          <li>3 blog posts each month. Want to share your success, upcoming events, or company new with your customers? Send us the details and we’ll upload your latest blog post for you.</li>
          <li>Image/Gallery Uploads and Video uploads</li>
          <li>Hosting ensures you website remains published</li>
          <li>A free SSL Certificate good for up to 30 days</li>
          <li>Backup & Restore</li>
          </ul>
    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="1">
    <Accordion.Header>Whats included in your daily maintenance plan?</Accordion.Header>
    <Accordion.Body>
    <ul>
        <li>
        Request service up to 4 times each month. Costs of additional services may vary.
        </li>
          <li>Submit up to 48 product uploads each month, please include the Product Title, Description, Product Photo, Quantities, Product Category, Sizes, Colors, Weight, Dimensions,and Shipping Rates. Product uploads may take up to 72 business hours to complete. For the best service please submit your product early as to not miss any deadlines such as product release dates or sales. Limit is 12 product uploads per upload submission.</li>
          <li>4 coupon creations each month, although you have access to create coupons on your own, if you don’t have time or just want to leave it to the professionals, we’ll create the coupons for you. Our Standard website allows basic coupons such as store wide discounts, to access dynamic coupons such as BOGO, please contact a representative.</li>
          <li>8 blog posts each month. Want to share your success, upcoming events, or company new with your customers? Send us the details and we’ll upload your latest blog post for you.</li>
          <li>Image/Gallery Uploads and Video uploads</li>
          <li>Hosting ensures you website remains published</li>
          <li>A free SSL Certificate good for up to 30 days</li>
          <li>Backup & Restore</li>
          </ul>
    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
    <Accordion.Header>Subscriber Discounts</Accordion.Header>
    <Accordion.Body>
    We’re happy to provide our customers 30% off  discounts for upgrading or marketing their website.
        <ul>
          <li>Website Revamps</li>
          <li>SEO Improvements</li>
          </ul>
    </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="3">
    <Accordion.Header>Turn Around Time</Accordion.Header>
    <Accordion.Body>
    We’ll respond to your request within 24 hours of receipt. Work for your request will begin within 48 hours of receipt and may take up to 72 hours to complete, this does not include weekends. Please send all requests at minimum 5 days before you need them to ensure timely updates. <b style={{color: "red"}}>Emergency updates</b> will be handled with 4 hours of request submitted between 12:00pm – 7:00pm Weekdays and Weekend. Emergency requests include: failed payment, unsecure website, website down, products not showing, etc.
    </Accordion.Body>
    </Accordion.Item>
</Accordion>
    </div>
  );
};

export default Faqs;