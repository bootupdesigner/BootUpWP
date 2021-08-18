import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = () => {
  return (
    <div className="row d-flex flex-row justify-content-evenly">
      <div className="d-flex flex-col align-items-center justify-content-center">
        <a href="mailto:bootup.itinfo@gmail.com" className="mx-3">Contact</a>
        <a className="mx-2" href="https://www.twitter.com/bootupdesigners" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={["fab", "twitter"]} size="md" />
        </a>
        <a className="mx-2" href="https://www.facebook.com/bootupwebdesigns/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} size="md" />
        </a>
        <a className="mx-2" href="https://www.linkedin.com/in/curtis-shepard-2a3654181/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="md" />
        </a>
      </div>
    </div>
  );
};

export default Social;