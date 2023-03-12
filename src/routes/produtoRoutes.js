import express from "express";

import Controller from "../controller/ProdutosController.js"
const routes = express.Router()
routes
    .get("/produto/", Controller.listar)
    .get("/produto/:id", Controller.buscaPorId)
    .post("/produto/", Controller.cadastrar)
    .delete("/produto/:id", Controller.deletar)
    .put("/produto/:id", Controller.atualizar)

export default routes