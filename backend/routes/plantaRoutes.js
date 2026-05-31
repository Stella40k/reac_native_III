import { Router } from "express";
import {
  obtenerPlantas,
  crearPlanta,
  obtenerPlantaPorId,
  actualizarPlanta,
  eliminarPlanta,
} from "../controllers/plantaController.js";
import { upload } from "../middleware/upload.js";
const router = Router();

router.get("/", obtenerPlantas);
router.post("/", crearPlanta);
router.get("/:id", obtenerPlantaPorId);
router.put("/:id", actualizarPlanta);
router.delete("/:id", eliminarPlanta);
router.post("/", upload.single("imagen"), crearPlanta);
export default router;
