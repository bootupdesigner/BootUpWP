import React from "react";
import { InlineWidget } from "react-calendly";


const Request = () => {
  return (
    <div>
      <div className="bg-secondary text-white text-center">
        <h1>Schedule a Consultation</h1>
        <p>We look forward to hearing from you!</p>
      </div>
      <InlineWidget url="https://calendly.com/bootupdesigner/virtual-website-design-consultation" />

    </div>
  );
};

export default Request;