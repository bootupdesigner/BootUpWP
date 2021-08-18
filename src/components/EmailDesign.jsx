import React from 'react';
import { Row, Col } from "react-bootstrap";

const EmailDesign = () => {
    return(
        <div>
        <div className="bg-secondary text-white text-center">
          <h1>Email Blast Designs</h1>
          <p>Become More Accessible to your Customers</p>
        </div>
           
        <Row className="mx-3 justify-content-center">
          <Col md={8} lg={8} xl={8} xxl={8}>
            <h2 style={{textAlign: "center"}}>Reach Customers Through Email</h2>
            <p>Great customer relationship management will give you a influx of returning customers to your website. We'll design your email blast to appeal to your customers and convert more sales.</p>
          </Col>
          <Col md={8} lg={8} xl={8} xxl={8}>
          <span><b>What's Included:</b></span>
          <ul>
              <li>48 Hour Turnaround</li>
              <li>MailChimp Campaign Design</li>
              <li>1 Revision</li>
          </ul>

          <span><b>Costs: $15 each</b></span>
          </Col>

          <Col md={8} lg={8} xl={8} xxl={8}>
          <form className="mt-3" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="ZSX9J4K588FQL" />
<table className="mb-1">
<tr><td><input type="hidden" name="on0" value="Quantity" />Quantity</td></tr><tr><td><select name="os0">
	<option value="1">1 $15.00 USD</option>
	<option value="2">2 $30.00 USD</option>
	<option value="3">3 $45.00 USD</option>
	<option value="4">4 $60.00 USD</option>
</select> </td></tr>
</table>

<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
          </Col>
        </Row>
    </div> 
    )
}

export default EmailDesign;