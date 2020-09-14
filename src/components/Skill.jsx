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
    <div id="skill">
      <div>
        <h3>Habilidades</h3>
      </div>
      <div
        style={{ fontSize: "8em", color: "cornflowerblue" }}
        id="habilidades"
      >
        <div>
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div>
          <FontAwesomeIcon icon={faCss3} />
        </div>
        <div>
          <FontAwesomeIcon icon={faBootstrap} />
        </div>
        <div>
          <FontAwesomeIcon icon={faJsSquare} />
        </div>
        <div>
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div>
          <FontAwesomeIcon icon={faAngular} />
        </div>
        <div>
          <FontAwesomeIcon icon={faJava} />
        </div>
        <div>
          <FontAwesomeIcon icon={faGithubSquare} />
        </div>
      </div>
    </div>
  );
};
