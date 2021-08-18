import React from 'react';
import { Row, Col } from "react-bootstrap";


const SeoImprovement =() => {
    return(
        <div>
          <div className="bg-secondary text-white text-center">
            <h1>SEO Improvements</h1>
            <p>Become More Accessible to your Customers</p>
          </div>
             
          <Row className="mx-3 justify-content-center">
            <Col md={8} lg={8} xl={8} xxl={8}>
              <h2 style={{textAlign: "center"}}>Get Found On Google</h2>
              <p>Your SEO results are populated by more than your website alone, developing your presence on the internet improves your SEO. Our E-Commerce Design Specialist will analyze your current SEO results and take the appropriate steps to improve your search engine ranking and build your presence on the internet and Google.</p>
            </Col>
            <Col md={8} lg={8} xl={8} xxl={8}>
            <span><b>What's Included:</b></span>
            <ul>
                <li>SEO Audit</li>
                <li>Website Edit</li>
                <li>Company Branding</li>
            </ul>

            <span><b>Costs: $300</b></span>
            </Col>
            <Col md={8} lg={8} xl={8} xxl={8}>
            <form className="mt-3"
        target="paypal"
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="YGV6HE7V8WP7L" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
            </Col>
          </Row>
      </div>
    )
}
export default SeoImprovement;