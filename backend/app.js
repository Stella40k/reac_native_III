import express from "express";
import cors from "cors";
import "./models/Planta.js";
import "./models/Usuario.js";
import { database } from "./config/db.js";
import { envs } from "./config/envs.js";
import plantaRoutes from "./routes/plantaRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/plantas", plantaRoutes);
app.use("/api/auth", authRoutes);

const conectServer = async () => {
  try {
    await database.authenticate();
    console.log("conexion exitosa a la bd");
    //await database.sync();
    //console.log("tabla sincronizada");
    app.listen(envs.PORT, () => {
      console.log(`servidor corriendo en el puerto ${envs.PORT}`);
    });
  } catch (error) {
    console.error("error al conectar a la bd", error);
  }
};
conectServer();
