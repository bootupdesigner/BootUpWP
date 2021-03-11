import React from "react";

const EmailDesign = () => {
  return (
    <div className="add-to-cart">
      <h3>Email Blast Design</h3>
      <p>Purchase your Email design</p>
      <p>
        <b>$15</b>
      </p>
      <p>48 Hour Turnaround</p>
        <p>MailChimp Campaign Design</p>
        <p>1 Revision</p>
     <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="ZSX9J4K588FQL" />
<table>
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

    </div>
  );
};

export default EmailDesign;