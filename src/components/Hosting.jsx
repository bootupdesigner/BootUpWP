import React from 'react';
import ContactButton from './ContactButton';

const Hosting = () => {
    return(
        <div>
            <div className="page-description">
        <h1>Hosting and Maintenance</h1>
        <p>Let's Publish your Website to the Internet</p>
      </div>
      <div className="blog">
          <h4>Hosting</h4>
          <ul>
              <li><p>Publishing your website to the internet requires a hosting service. Great news, our premium hosting service also comes with a free SSL Certificate that keeps your users information safe. With automatic recurring monthly or yearly payments your website will always be available online.</p></li>
          </ul>
          <h4>Maintenance</h4>
          <ul>
              <li><p>All websites need maintenance, the internet is constantly changing and from time to time your website may need updating. Regular maintenance to your website includes updates, backup and restore, and data analysis. Maintenance that can can be schedule upon request include:</p>
              <ul>
                  <li>Product, photo, or video uploads</li>
                  <li>Blog post uploads</li>
                  <li>Coupon creation</li>
                  <li>Stock quantity management</li>
              </ul>
              </li>
          </ul>
      </div>
      <ContactButton />
        </div>
    )
}

export default Hosting;