import Pedido from "../models/Pedido.js"
import itemPedido from "../models/itensPedidos.js";


class PedidosController {
    static async listar(req, res) {
    const listaDePedidos = await Pedido.find()
        res.json(listaDePedidos)
        try {
            let pedidos = await listar();

            return res.status(200).json(pedidos);
        } catch (error) {
            return res.status(500).json({error});
        }
       
            
        
    }
   


    static async buscaPorId(req, res) {
        const id = req.params.id; // assume que o ID da categoria está presente nos parâmetros da requisição
        try {
            const pedido = await Pedido.findById( id );
            return res.status(200).json(pedido);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }

    
    }

    static async cadastrar(req, res) {
        const {usuario, valorTotal, itens} = req.body
        let novoPedido = new Pedido({
            usuario, valorTotal, itens
    });

    const resultado = await novoPedido.save();

    res.json(resultado)

    }

    static async deletar(req, res) {
        const id = req.params.id
        try {
            const pedidoDeletado = await Pedido.findByIdAndDelete(id);
            return res.status(200).json(pedidoDeletado);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    static async atualizar(req, res) {
        const id = req.params.id
        const {usuario, valorTotal, itens } = req.body

        try {
            
            const pedidoAtualizado = await Pedido.findByIdAndUpdate(id, {usuario, valorTotal, itens});

            
            return res.status(200).json(pedidoAtualizado);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }


    }

}


export default  PedidosController