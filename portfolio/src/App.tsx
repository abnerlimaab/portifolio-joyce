import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Contato } from "./pages/Contato";
import { Home } from "./pages/Home";
import { Portifolio } from "./pages/Portifolio";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar menuActive={location.pathname.slice(1)} />
      <Routes>
        <Route path="/" element={<Navigate to="/sobre" />} />
        <Route path="sobre" element={<Home />} />
        <Route path="portfolio" element={<Portifolio />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default App;
