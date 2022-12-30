import React from "react";
import freeCodeCampLogo from "./assets/images/freecodecamp-logo.png";
import "./App.css";
import Boton from "./assets/components/Boton";
import Contador from "./assets/components/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics((prevClic) => prevClic + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div className="App">
      {/* <h1>Hola Mundo</h1> */}
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
