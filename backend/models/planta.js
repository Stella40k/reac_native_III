import { DataTypes } from "sequelize";
import { database } from "../config/db.js";

export const Planta = database.define(
  "Planta",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    toxicidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    usosMagicos: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "plantas",
  },
);
