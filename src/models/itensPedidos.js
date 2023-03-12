import mongoose from "mongoose";



const itemPedidoSchema = new mongoose.Schema({
    quantidade: {
        type: String,
        trim: true,
        required: "Esse campo é obrigatorio!"
    },

    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "produtos",
        required: "Esse campo é obrigatorio!"
    }
    
});

const itemPedido = mongoose.model("itemPedido", itemPedidoSchema);

export default itemPedido;