import React from "react";
import "./App.css";
import Proyectos from "./components/Proyectos";
import { QuienSoy } from "./components/QuienSoy";
import { Skill } from "./components/Skill";

function App() {
  return (
    <div className="App">
      <QuienSoy />
      <Skill />
      <Proyectos />
    </div>
  );
}

export default App;
