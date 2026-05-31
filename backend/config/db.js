import { Sequelize } from "sequelize";
import { envs } from "./envs.js";

export const database = new Sequelize(
  envs.DB_NAME,
  envs.DB_USER,
  envs.DB_PASSWORD,
  {
    host: envs.DB_HOST,
    port: envs.DB_PORT,
    dialect: "mysql",
    logging: false,
  },
);
