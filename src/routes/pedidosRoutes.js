import express from "express";

import Controller from "../controller/PedidoController.js"
const routes = express.Router()
routes
    .get("/pedido/", Controller.listar)
    .get("/pedido/:id", Controller.buscaPorId)
    .post("/pedido/", Controller.cadastrar)
    .delete("/pedido/:id", Controller.deletar)
    .put("/pedido/:id", Controller.atualizar)

export default routes