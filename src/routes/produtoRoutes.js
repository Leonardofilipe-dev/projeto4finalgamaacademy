import express from "express";
import Upload from "../middlewares/Uploads.js";
import multer from "multer";

import Controller from "../controller/ProdutosController.js"
const routes = express.Router()
routes
    .get("/produto/", Controller.listar)
    .get("/produto/:id", Controller.buscaPorId)
    .post("/produto/", Upload.single("photo"), Controller.cadastrar)
    .delete("/produto/:id", Controller.deletar)
    .put("/produto/:id", Controller.atualizar)

export default routes