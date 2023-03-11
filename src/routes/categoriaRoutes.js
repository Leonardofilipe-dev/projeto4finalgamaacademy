import express from "express";

import Controller from "../controller/CategoriaController.js"
const routes = express.Router()
routes
    .get("/categoria/", Controller.listar)
    .get("/categoria/:id", Controller.buscaPorId)
    .post("/categoria/", Controller.cadastrar)
    .delete("/categoria/:id", Controller.deletar)
    .put("/categoria/:id", Controller.atualizar)

export default routes