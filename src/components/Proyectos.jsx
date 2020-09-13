import React from "react";
import { darktheme } from "../imagen/darktheme.png";

export default function Proyectos() {
  return (
    <div>
      <div id="projects">
        <p id="project-tile">Proyectos</p>
        <div>
          <a
            href="https://github.com/jamir2308/darktheme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={darktheme} alt="darktheme" />
          </a>
          <p>Social Media Dashboard Dinamica</p>
        </div>
        <div>
          <a
            href="https://github.com/jamir2308/darktheme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={darktheme} alt="darktheme" />
          </a>
          <p>Social Media Dashboard Dinamica</p>
        </div>
        <div>
          <a
            href="https://github.com/jamir2308/darktheme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={darktheme} alt="darktheme" />
          </a>
          <p>Social Media Dashboard Dinamica</p>
        </div>
      </div>
    </div>
  );
}
