import express from "express"

import categoriaRoutes from "./categoriaRoutes.js"
import produtoRoutes from "./produtoRoutes.js"
import usuarioRoutes from "./usuarioRouter.js"

const routes = (app) => {
    app.use(
        express.json(), 
        categoriaRoutes,
        produtoRoutes,
        usuarioRoutes
    )
}

export default routes