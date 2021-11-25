import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Cabecera from "./cabecera.js";
import Nombres from "./nombres.js";

function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/" element={<h1>Rutas en React</h1>} />
        <Route path="/nombres" element={Nombres} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
