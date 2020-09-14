import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
  return (
    <div id="footer">
      <div>
        <span>Portafolio: Jamir Patiño</span>
      </div>
      <div id="icon-footer">
        <a
          href="www.linkedin.com/in/jamir-patiño-carrascal-"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "1.5em",
            color: "white",
            paddingRight: "10px",
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/jamir2308"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "1.5em",
            color: "white",
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};
