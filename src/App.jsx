import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();

  return (
    <>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite a cidade"></input>
      <button>Buscar</button>
    </>
  );
}

export default App;
