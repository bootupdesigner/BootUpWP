import React from 'react';
import { Link } from "react-router-dom";

import Social from './Social';

import bootupbanner from '../images/banner.png';

const Header = () => {
    return(
<div className="row my-3">
    <div className="col  d-flex justify-content-center">
      <Link to="/"><img className="banner-logo" src={bootupbanner} alt="boot up banner" height="120px" width="120px" /></Link>
    </div>  

    <div className="col  d-flex justify-content-center">
        <Social />
    </div>
</div>
    );
};

export default Header;