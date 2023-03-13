import express from "express";

import Controller from "../controller/UsuarioController.js"
//import routes from "./categoriaRoutes.js";

const router = express.Router();

router
    .post("/login", Controller.login);

export default router;