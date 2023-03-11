import express from "express"

import categoriaRoutes from "./categoriaRoutes.js"

const routes = (app) => {
    app.use(
        express.json(), 
        categoriaRoutes
    )
}

export default routes