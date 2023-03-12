import Produto from "../models/Produto.js"


class ProdutosController {
    static async listar(req, res) {
    const listaDeProdutos = await Produto.find()
        res.json(listaDeProdutos)
        try {
            let produtos = await listar();

            return res.status(200).json(produtos);
        } catch (error) {
            return res.status(500).json({error});
        }
       
            
        
    }
   


    static async buscaPorId(req, res) {
        const id = req.params.id; // assume que o ID da categoria está presente nos parâmetros da requisição
        try {
            const produto = await Produto.findById( id );
            return res.status(200).json(produto);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }

    
    }

    static async cadastrar(req, res) {
        const {nome, preco, descricao, categoria, photo} = req.body
        let novoProduto = new Produto({
        nome, photo: req.file.filename, preco, descricao, categoria
    });
    console.log(photo)
    const resultado = await novoProduto.save();

    res.json(resultado)

    }

    static async deletar(req, res) {
        const id = req.params.id
        try {
            const produtoDeletado = await Produto.findByIdAndDelete(id);
            return res.status(200).json(produtoDeletado);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    static async atualizar(req, res) {
        const id = req.params.id
        const {nome, preco, descricao, categoria, photo } = req.body

        try {
            
            const produtoAtualizado = await Produto.findByIdAndUpdate(id, {nome:nome, preco, descricao, categoria, photo});

            
            return res.status(200).json(produtoAtualizado);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }


    }

}


export default  ProdutosController