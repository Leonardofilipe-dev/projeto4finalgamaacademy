import mongoose from "mongoose";

const ProdutoSchema = new mongoose.Schema({
    nome:{
        type:String,
        trim: true,
        required:true
    },
    
    photo: {
        type: String,
        required: true
      },
      preco: {
        type: Number,
        required: true
      }, 

      descricao: {
        type: String,
        trim: true,
        required: true
      },
      
    
    //
    categoria:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "categorias"
    }
})

const Produto = mongoose.model("Produtos", ProdutoSchema)

export default Produto