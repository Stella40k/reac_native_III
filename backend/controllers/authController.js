import { Usuario } from "../models/Usuario.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({
      where: {
        email,
        password,
      },
    });

    if (!usuario) {
      return res.status(401).json({
        mensaje: "Credenciales incorrectas",
      });
    }

    res.status(200).json({
      mensaje: "Login exitoso",
      usuario,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error en login",
      error: error.message,
    });
  }
};
