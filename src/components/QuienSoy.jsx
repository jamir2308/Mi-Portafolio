import React from "react";
import jamir from "../imagen/jamir.png";

export const QuienSoy = () => {
  return (
    <div id="welcome-section" className="row">
      <div className="col-6">
        <h1>Jamir Patiño</h1>
        <h4> Desarrollador web junior</h4>
        <div>
          <p>
            Desarrollador web Frontend con enfasis en ReactJS/NodeJS en Academia
            Geek con habilidades en html, css , Javascript, java. Apasionado por
            las tecnologias web y el aprendizaje continuo.
          </p>
        </div>
      </div>

      <div className="col-6">
        <img src={jamir} alt="Jamir" />
      </div>
    </div>
  );
};
