import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Cabecera from "./cabecera.js";
import Gatos from "./gatos.js";
import Perros from "./perros.js";

function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/" element={<p>Estamos en la página de inicio</p>} />
        <Route path="/gatos" element={<Gatos />} />
        <Route path="/perros" element={<Perros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
