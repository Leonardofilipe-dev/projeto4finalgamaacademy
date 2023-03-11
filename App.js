import express from "express"

import routes from "./src/routes/index.js"

const app = express();
routes(app)

app.listen(5000, ()=>{
    console.log("Server running at port 5000...");
}); 