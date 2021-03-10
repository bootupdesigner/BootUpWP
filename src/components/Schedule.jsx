import React from 'react';
import ServiceLink from "./ServiceLink";

import {InlineWidget} from 'react-calendly';

const Schedule = () => {
    return(
        <div>
            <div className="page-description">
              <h1>Request A Consultation</h1>
              <p>Let's talk about your website design</p>
            </div>
            <div style={{textAlign: "center"}}>
            <h2>Safe Zoom Consultations</h2>
            <span>We want to learn more about your web design needs!</span>
            </div>
          <InlineWidget url="https://calendly.com/bootupdesigner/virtual-website-design-consultation" style={{height: '100%'}}/>
          <div>
          <ServiceLink />
          </div>
        </div>
    )
}

export default Schedule;