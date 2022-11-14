import { Router } from "express";
import { methods as usuarioController } from "./../controllers/usuario.controller";

const router=Router();

router.get("/usuarios",usuarioController.getUsuarios);
router.get("/usuario/:id_u",usuarioController.getUsuario);
router.post("/post_u",usuarioController.postUsuario);
router.put("/update_u/:id_u",usuarioController.updateUsuario);
router.put("/delete_u/:id_u",usuarioController.deleteUsuario);
router.get("/login/:id_u/:password_u",usuarioController.loginUsuario);

export default router;