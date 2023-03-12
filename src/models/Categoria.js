import mongoose from "mongoose";

const CategoriaSchema = new mongoose.Schema({
    nome:{
        type:String,
        trim: true,
        required:true
    }
})

const Categoria = mongoose.model("categorias", CategoriaSchema)

export default Categoria