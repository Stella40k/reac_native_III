import { memo } from "react";
function PlantaCard({ planta, onEliminar }) {
  console.log("Renderizando:", planta.nombre);
  return (
    <div>
      <h2>{planta.nombre}</h2>
      <p>{planta.descripcion}</p>
      <p>Toxicidad: {planta.toxicidad}</p>
      <p>{planta.usosMagicos}</p>
      <button onClick={() => onEliminar(planta.id)}>🗑 Eliminar</button>
    </div>
  );
}

export default memo(PlantaCard);
