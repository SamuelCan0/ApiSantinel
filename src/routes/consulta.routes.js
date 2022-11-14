import { Router } from "express";
import { methods as consultaController } from "../controllers/consulta.controller";

const router=Router();

router.get("/consulta/:id_p1",consultaController.getConsultasPaciente);
router.post("/post_c",consultaController.postConsulta);
router.get("/consultas",consultaController.getConsultas);

export default router;