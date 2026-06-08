import { Usuario } from "../models/Usuario.js";

export const register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const existe = await Usuario.findOne({
      where: { email },
    });

    if (existe) {
      return res.status(400).json({
        mensaje: "El usuario ya existe",
      });
    }

    const usuario = await Usuario.create({
      nombre,
      email,
      password,
    });

    res.status(201).json({
      mensaje: "Usuario registrado",
      usuario,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al registrar",
      error: error.message,
    });
  }
};

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
