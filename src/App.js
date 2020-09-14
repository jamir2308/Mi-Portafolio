import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Proyectos from "./components/Proyectos";
import { QuienSoy } from "./components/QuienSoy";
import { Skill } from "./components/Skill";

function App() {
  return (
    <div>
      <Header />
      <QuienSoy />
      <Skill />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
