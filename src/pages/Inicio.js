import React from "react";
import CitasLayout from "../components/CitasLayout";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import Pacientes from "./Pacientes";
import Recetas from "./Recetas";
import Citas from "./Citas";
import MainLayout from "../components/MainLayaout";

const Inicio = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="citas" element={<Citas />} />
        <Route path="pacientes" element={<Pacientes />} />
        <Route path="recetas" element={<Recetas />} />
      </Route>
    </Routes>
  );
};

export default Inicio;
