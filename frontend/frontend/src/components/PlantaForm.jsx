import { useState } from "react";

function PlantaForm({ onAgregar }) {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    toxicidad: "",
    usosMagicos: "",
  });

  const [imagen, setImagen] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAgregar({
      ...formData,
      toxicidad: Number(formData.toxicidad),
      imagen: imagen,
    });

    setFormData({
      nombre: "",
      descripcion: "",
      toxicidad: "",
      usosMagicos: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Planta</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="toxicidad"
        placeholder="Toxicidad"
        value={formData.toxicidad}
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="usosMagicos"
        placeholder="Usos mágicos"
        value={formData.usosMagicos}
        onChange={handleChange}
      />

      <br />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImagen(e.target.files[0])}
      />
      <button type="submit">Agregar Planta</button>
    </form>
  );
}

export default PlantaForm;
