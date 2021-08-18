import React from "react";
import { Row, Col } from "react-bootstrap";

const Revamp = () => {
    return(
        <div>
        <div className="bg-secondary text-white text-center">
          <h1>Website Revamps</h1>
          <p>Let's make the changes you desire</p>
        </div>
           
        <Row className="mx-3 justify-content-center">
          <Col md={8} lg={8} xl={8} xxl={8}>
            <h2 style={{textAlign: "center"}}>It's time to make some changes to your website!</h2>
            <p>Your website is like your home, sometimes you've got to do a litte renovation to make your guest feel more welcome. Revamps give your website a new look and remind customers why they choose you, you're a professional and you care about your company image and quality of the customer relationship.</p>
          </Col>
          <Col md={8} lg={8} xl={8} xxl={8}>
          <span><b>What's Included:</b></span>
          <ul>
              <li>Theme changes</li>
              <li>New pages</li>
              <li>Some feature may include additional cost upon request</li>
          </ul>

          <span><b>Costs: $150</b></span>
          </Col>

          <Col md={8} lg={8} xl={8} xxl={8}>
          <form className="mt-3" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="MCH7GND53XU5A" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
          </Col>
        </Row>
    </div> 
    )
}

export default Revamp;