import React from "react";

import WebServices from "./WebServices";
import Slideshow from "./Slideshow";
import ServiceLink from "./ServiceLink";
import DesignChart from "./DesignChart";

const BootUp = () => {
  return (
    <div>
      <div className="page-description">
        <h1>Boot Up</h1>
        <p>Jump Start Your Website</p>
      </div>
      <WebServices />
      <ServiceLink />
      <DesignChart />
      <Slideshow />
    </div>
  );
};
export default BootUp;

