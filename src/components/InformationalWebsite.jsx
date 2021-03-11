import React from 'react';

const InformationalWebsite = () => {
    return(
        <div className="add-to-cart">
    <h3>Informational & Booking Website Design</h3>
    <p>Purchase your website design</p>
    <p><b>$895</b></p>
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="YVK3JYJBNVP54" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>


</div>
    )
}

export default InformationalWebsite;