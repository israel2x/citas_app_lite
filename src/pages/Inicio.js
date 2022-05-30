import React from "react";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import Pacientes from "./Pacientes";
import Recetas from "./Recetas";
import Citas from "./Citas";
import MainLayout from "../components/MainLayaout";
import MainTabs from "../components/MainTabs";

const Inicio = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Citas />} />
        {/* <Route path="citas" element={<MainTabs />} /> */}
        <Route path="pacientes" element={<Pacientes />} />
        <Route path="recetas" element={<Recetas />} />
      </Route>
    </Routes>
  );
};

export default Inicio;
