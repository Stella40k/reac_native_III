import PlantaCard from "./PlantaCard";

function PlantaList({ plantas, onEliminar }) {
  return (
    <>
      {plantas.map((planta) => (
        <PlantaCard key={planta.id} planta={planta} onEliminar={onEliminar} />
      ))}
    </>
  );
}

export default PlantaList;
