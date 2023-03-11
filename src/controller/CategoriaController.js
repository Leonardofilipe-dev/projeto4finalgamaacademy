class CategoriaController {
    static async listar(req, res) {
        
        res.send("Listar")

    }

    static async buscaPorId(req, res) {
        res.send("BuscarPorId")
    }

    static async cadastrar(req, res) {
        res.send("Cadastrar")
    }

    static async deletar(req, res) {
        res.send("deletar")
    }

    static async atualizar(req, res) {
        res.send("atualizar")

    }

}


export default  CategoriaController