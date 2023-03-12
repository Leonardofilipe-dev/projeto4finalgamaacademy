
import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    nome:{
        type:String,
        trim: true,
        required:true
    },
    
    email: {
        type: String,
        required: true
      },
      senha: {
        type:String,
        required: true
      }, 

})

const Produto = mongoose.model("usuario", UsuarioSchema)

export default Produto