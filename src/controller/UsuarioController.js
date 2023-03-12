import Usuario from "../models/Usuario.js"

class UsuarioController{
    static async listar(req, res) {
    const listaDeUsuario = await Usuario.find()
        res.json(listaDeUsuario)
        try {
            let usuarios = await listar();

            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).json({error});
        }
       
            
        
    }
   


    static async buscaPorId(req, res) {
        const id = req.params.id; // assume que o ID da categoria está presente nos parâmetros da requisição
        try {
            const usuario = await Usuario.findById( id );
            return res.status(200).json(usuario);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }

    
    }

    static async cadastrar(req, res) {
        const {nome, email, senha, endereco} = req.body
        let novoUsuario = new Usuario ({
        nome, email, senha, endereco
    });

    const resultado = await novoUsuario.save();

    res.json(resultado)

    }

    static async cadastrarAdm(req, res){
        try {
            let {email} = req.body;

            let usuarioCadastrado = await buscarPorEmail(email);

            if(usuarioCadastrado){
                return res.status(400).json({erro: "Email já cadastrado."});
            }

            req.body.senha = bcrypt.hashSync(req.body.senha);

            let novoUsuario = await Repository.criarAdm(req.body);

            return res.status(201).json(novoUsuario);
        } catch (error) {
            return res.status(500).json({error});
        }
    }

    static async deletar(req, res) {
        const id = req.params.id
        try {
            const usuarioDeletado = await Usuario.findByIdAndDelete(id);
            return res.status(200).json(usuarioDeletado);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    static async atualizar(req, res) {
        const id = req.params.id
        const {nome, email, senha, endereco} = req.body

        try {
            
            const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, {nome, email, senha, endereco});

            
            return res.status(200).json(usuarioAtualizado);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }


    }

}


export default  UsuarioController