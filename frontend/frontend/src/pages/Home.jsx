import { useNavigate } from "react-router-dom";

import PlantaList from "../components/PlantaList";
import PlantaForm from "../components/PlantaForm";

import "../App.css";

function Home({
  plantasFiltradas,
  handleEliminar,
  handleAgregar,
  busqueda,
  setBusqueda,
}) {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <div className="app">
      <button className="logout-btn" onClick={cerrarSesion}>
        Cerrar sesión
      </button>

      <h1>𓍢ִ໋🌷͙֒𓍢ִ Boticario ˚⊱🪷⊰˚ Mágico 𓍢ִ໋🌷͙֒𓍢ִ</h1>

      <p className="subtitulo">
        ⭒˚.⋆ Catálogo de hierbas, flores y raíces utilizadas por curanderas de
        la zona ⭒˚.⋆
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

export default Home;
