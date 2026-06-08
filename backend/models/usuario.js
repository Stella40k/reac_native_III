import { DataTypes } from "sequelize";
import { database } from "../config/db.js";

export const Usuario = database.define("usuarios", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
