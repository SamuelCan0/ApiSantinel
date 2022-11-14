import { Router } from "express";
import { methods as pacienteController } from "../controllers/paciente.controller";

const router=Router();

router.get("/pacientes",pacienteController.getPacientes);
router.get("/paciente/:id_p",pacienteController.getPaciente);
router.post("/post_p",pacienteController.postPaciente);
router.put("/update_p/:id_p",pacienteController.updatePaciente);
router.put("/delete_p/:id_p",pacienteController.deletePaciente);
router.get("/search/:nombre_p",pacienteController.searchExpediente);

export default router;