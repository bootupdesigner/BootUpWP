import React from 'react';
import ContactButton from './ContactButton';

const WebsiteDesigns = () => {
    return(
        <div>
            <div className="page-description">
        <h1>Web Designs</h1>
        <p>Let's Start Designing Your Website</p>
      </div>
      <div>
          <h2 style={{textAlign: "center"}}>Website Designs</h2>
          <p className="blog">Boot Up Web Professionals design WordPress websites that are 100% responsive for Desktop, Laptop, Tablet, and Mobile. Your website comes with a full e-commerce integration including:</p>
          <ul className="blog">
              <li>PayPal and Stripe Credit Card (accept payments)</li>
              <li>SSL Certificate (keep your clients information safe)</li>
              <li>Backup and Restore (protect your data)</li>
              <li>Subscription Management System (includes pop-up)</li>
              <li>Social Media Integration (Facebook Instagram)</li>
              <li>User Login</li>
              <li>Handicap Accessibility (ADA Compliance)</li>
          </ul>
          <h4 className="blog">We Build Websites to Fit Your Needs</h4>
          <ul className="blog">
            <li>Informational Websites</li>
            <li>Scheduling Websites</li>
            <li>E-Commerce Websites</li>
            <li>Event Websites</li>
            <li>Landing Pages</li>
          </ul>
      </div>
      <ContactButton />
        </div>
    )
}

export default WebsiteDesigns;