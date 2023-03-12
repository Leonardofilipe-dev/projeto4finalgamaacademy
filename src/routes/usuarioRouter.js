import express from "express";

import Controller from "../controller/UsuarioController.js"
const routes = express.Router()
routes
    .get("/usuario/", Controller.listar)
    .get("/usuario/:id", Controller.buscaPorId)
    .post("/usuario/", Controller.cadastrar)
    .post("/usuario/", Controller.cadastrarAdm)
    .delete("/usuario/:id", Controller.deletar)
    .put("/usuario/:id", Controller.atualizar)

export default routes