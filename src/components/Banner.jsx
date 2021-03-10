import React from 'react';
import curtis from '../images/curtis.png'
import bootupbanner from '../images/bootupbanner.png'

const Banner = () => {
    return(
<div className="banner">
    <img className="" src={bootupbanner} alt="boot up banner" height="50%"/>
    <img className="banner" src={curtis} alt="Curtis's headshot" height="15%" width="15%" />
</div>
    );
};

export default Banner;