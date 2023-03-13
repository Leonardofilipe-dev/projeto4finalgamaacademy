import express from "express"
import cors from "cors"

import routes from "./src/routes/index.js"
import db from "./src/config/db.js";

import HandleError from "./src/middlewares/handleError.js";

db.on("error", console.log.bind(console, "Erro ao conectar ao Mongo"))
db.once("open", () =>{
    console.log("Conectado com sucesso!")
})

const app = express();
const corsOptions = {
    exposedHeaders: ['token']
}

app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Headers", true);
    res.header("Acess-Control-Allow-Credentials", "Content-Type");
    res.header("Acess-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
});
routes(app)

app.use(HandleError.handle)

app.listen(5000, ()=>{
    console.log("Server running at port 5000...");
}); 

export default app