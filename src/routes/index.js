import express from "express"

import categoriaRoutes from "./categoriaRoutes.js"
import produtoRoutes from "./produtoRoutes.js"
import usuarioRoutes from "./usuarioRouter.js"
import pedidoRoutes from "./pedidosRoutes.js"
import loginRoutes from "./loginRoutes.js"



const routes = (app) => {
    app.use(
        express.json(), 
        categoriaRoutes,
        produtoRoutes,
        usuarioRoutes,
        pedidoRoutes,
        loginRoutes
        
    )
}

export default routes