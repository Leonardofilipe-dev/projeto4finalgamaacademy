import Categoria from "../models/Categoria.js"

class CategoriaController {
 
    static async listar(req, res) {
        try {
          let categorias = await Categoria.find();
    
          return res.status(200).json(categorias);
        } catch (error) {
          return res.status(500).json({ error });
        }
      }


    static async buscaPorId(req, res) {
        const id = req.params.id; // assume que o ID da categoria está presente nos parâmetros da requisição
        try {
            const categoria = await Categoria.findById( id );
            return res.status(200).json(categoria);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    static async cadastrar(req, res) {
        const {nome } = req.body

        let categoriaCadastrada = await Categoria.findOne({nome});

        if(categoriaCadastrada){
            return res.status(400).json({erro: "Nome de categoria já cadastrado."});
        }

        let novaCategoria = new Categoria({
        nome
    });

    const resultado = await novaCategoria.save();

    res.json(resultado)

    }

    static async deletar(req, res) {
        const id = req.params.id
        try {
            const categoriaDeletada = await Categoria.findByIdAndDelete(id);
            return res.status(200).json(categoriaDeletada);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    static async atualizar(req, res) {
        const id = req.params.id
        const {nome } = req.body

        try {
            
            const categoriaAtualizada = await Categoria.findByIdAndUpdate(id, {nome:nome});

            return res.status(200).json(categoriaAtualizada);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

}


export default  CategoriaController