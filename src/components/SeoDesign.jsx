import React from "react";

const SeoDesign = () => {
  return (
    <div className="add-to-cart">
      <h3>SEO Improvement</h3>
      <p>Purchase your SEO Improvement</p>
      <p>
        <b>$300</b>
      </p>
        <p>SEO Audit</p>
        <p>Website Edit</p>
        <p>Company Branding</p>
      <form
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
    </div>
  );
};

export default SeoDesign;