import React from 'react';
import { Link } from "react-router-dom";

import bootupbanner from '../images/bootupbanner.png';

const Banner = () => {
    return(
<div className="banner">
    <Link to="/"><img className="banner-logo" src={bootupbanner} alt="boot up banner" height="50%"/></Link>
    </div>
    );
};

export default Banner;