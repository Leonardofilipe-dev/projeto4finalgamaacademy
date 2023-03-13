import express from "express";

import auth from "../middlewares/Auth.js";

import Controller from "../controller/PedidoController.js"
const routes = express.Router()
routes
    .get("/pedido/", Controller.listar)
    .get("/pedido/:id", Controller.buscaPorId)
    .post("/pedido/", auth.autenticar, Controller.cadastrar)
    .delete("/pedido/:id", auth.autenticar, Controller.deletar)
    .put("/pedido/:id", auth.autenticar, Controller.atualizar)

export default routes