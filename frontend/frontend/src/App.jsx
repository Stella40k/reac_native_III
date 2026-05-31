import { useEffect, useState, useMemo, useCallback } from "react";
import {
  obtenerPlantas,
  eliminarPlanta,
  crearPlanta,
} from "./services/plantaService";
import PlantaList from "./components/PlantaList";
import PlantaForm from "./components/PlantaForm";
import "./App.css";
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
    <div className="app">
      <h1>𓍢ִ໋🌷͙֒𓍢ִ Boticario ˚⊱🪷⊰˚ Mágico 𓍢ִ໋🌷͙֒𓍢ִ</h1>

      <p className="subtitulo">
        ⭒˚.⋆Catálogo de hierbas, flores y raíces utilizadas por curanderas de la
        zona⭒˚.⋆
      </p>

      <input
        type="text"
        placeholder="Buscar planta..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <PlantaForm onAgregar={handleAgregar} />
      <PlantaList plantas={plantasFiltradas} onEliminar={handleEliminar} />
    </div>
  );
}

export default App;
