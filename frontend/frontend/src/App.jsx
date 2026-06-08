import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState, useMemo, useCallback } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";

import {
  obtenerPlantas,
  eliminarPlanta,
  crearPlanta,
} from "./services/plantaService";

function App() {
  const [plantas, setPlantas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const cargarPlantas = async () => {
      try {
        const respuesta = await obtenerPlantas();
        setPlantas(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };

    cargarPlantas();
  }, []);

  const plantasFiltradas = useMemo(() => {
    return plantas.filter((planta) =>
      planta.nombre.toLowerCase().includes(busqueda.toLowerCase()),
    );
  }, [plantas, busqueda]);

  const handleEliminar = useCallback(async (id) => {
    try {
      await eliminarPlanta(id);

      setPlantas((prev) => prev.filter((planta) => planta.id !== id));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleAgregar = async (planta) => {
    try {
      const respuesta = await crearPlanta(planta);

      setPlantas((prev) => [...prev, respuesta.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <Home
              plantasFiltradas={plantasFiltradas}
              handleEliminar={handleEliminar}
              handleAgregar={handleAgregar}
              busqueda={busqueda}
              setBusqueda={setBusqueda}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
