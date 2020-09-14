import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
  return (
    <div id="footer">
      <div>
        <span>Portafolio: Jamir Patiño</span>
      </div>
      <div style={{ fontSize: "1.5em", color: "white" }} id="icon-footer">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  );
};
