import express from "express";

import auth from "../middlewares/Auth.js";

import Controller from "../controller/CategoriaController.js"
const routes = express.Router()
routes
    .get("/categoria/", Controller.listar)
    .get("/categoria/:id", Controller.buscaPorId)
    .post("/categoria/", auth.autenticarAdm, Controller.cadastrar)
    .delete("/categoria/:id", auth.autenticarAdm, Controller.deletar)
    .put("/categoria/:id", auth.autenticarAdm,  Controller.atualizar)

export default routes