import React from "react";
import darktheme from "../imagen/darktheme.png";
import pokedex from "../imagen/pokedex.png";
import randomQuote from "../imagen/randomQuote.png";

export default function Proyectos() {
  return (
    <div id="proyecto">
      <h3 id="project-tile">Proyectos</h3>
      <div id="projects">
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
            href="https://random-quote-machine-lac.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={randomQuote} alt="darktheme" />
          </a>
          <p>Random Quote Machine</p>
        </div>
        <div>
          <a
            href="https://reto-pokemon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pokedex} alt="darktheme" />
          </a>
          <p>Reto-Pokedex</p>
        </div>
      </div>
    </div>
  );
}
