import express from "express"

import categoriaRoutes from "./categoriaRoutes.js"
import produtoRoutes from "./produtoRoutes.js"

const routes = (app) => {
    app.use(
        express.json(), 
        categoriaRoutes,
        produtoRoutes
    )
}

export default routes