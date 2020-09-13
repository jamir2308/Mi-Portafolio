import React from "react";
import {
  faAngular,
  faBootstrap,
  faCss3,
  faGithubSquare,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Skill = () => {
  return (
    <div>
      <div>
        <h3>Skill</h3>
      </div>
      <div style={{ fontSize: "8em", color: "cyan" }}>
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faBootstrap} />
        <FontAwesomeIcon icon={faJsSquare} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faAngular} />
        <FontAwesomeIcon icon={faJava} />
        <FontAwesomeIcon icon={faGithubSquare} />
      </div>
    </div>
  );
};
