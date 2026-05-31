import { Planta } from "../models/Planta.js";

export const obtenerPlantas = async (req, res) => {
  try {
    const plantas = await Planta.findAll();

    res.status(200).json(plantas);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener plantas",
      error: error.message,
    });
  }
};
export const crearPlanta = async (req, res) => {
  try {
    const { nombre, descripcion, toxicidad, usosMagicos } = req.body;

    const imagen = req.file ? `/uploads/${req.file.filename}` : null;
    if (!nombre || !descripcion || !toxicidad || !usosMagicos) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios",
      });
    }

    const nuevaPlanta = await Planta.create({
      nombre,
      descripcion,
      toxicidad,
      usosMagicos,
      imagen,
    });

    res.status(201).json(nuevaPlanta);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear planta",
      error: error.message,
    });
  }
};
export const obtenerPlantaPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const planta = await Planta.findByPk(id);

    if (!planta) {
      return res.status(404).json({
        mensaje: "Planta no encontrada",
      });
    }

    res.status(200).json(planta);
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};
export const actualizarPlanta = async (req, res) => {
  try {
    const { id } = req.params;

    const planta = await Planta.findByPk(id);

    if (!planta) {
      return res.status(404).json({
        mensaje: "Planta no encontrada",
      });
    }

    await planta.update(req.body);

    res.status(200).json({
      mensaje: "Planta actualizada",
      planta,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};
export const eliminarPlanta = async (req, res) => {
  try {
    const { id } = req.params;

    const planta = await Planta.findByPk(id);

    if (!planta) {
      return res.status(404).json({
        mensaje: "Planta no encontrada",
      });
    }

    await planta.destroy();

    res.status(200).json({
      mensaje: "Planta eliminada correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error.message,
    });
  }
};
