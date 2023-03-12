import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({

    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios",
        required: true
    },

    valorTotal: {
        type: Number,
        required: "Esse campo é obrigatório!"
    },

    itens: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "itemPedido",
    }]
});


const Pedido = mongoose.model("pedido", pedidoSchema);


export default Pedido