import Usuario from "../models/Usuario.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { response } from "express"

class UsuarioController {
    static async listar(req, res) {
        const listaDeUsuario = await Usuario.find()
        res.json(listaDeUsuario)
        try {
            let usuarios = await listar();

            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    static async buscaPorId(req, res) {
        const id = req.params.id; // assume que o ID da categoria está presente nos parâmetros da requisição
        try {
            const usuario = await Usuario.findById(id);
            return res.status(200).json(usuario);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }

    }

    static async cadastrar(req, res) {

        const { nome, email, senha, endereco } = req.body
        let senhaHash = bcrypt.hashSync(senha)
        let novoUsuario = new Usuario({
            nome, email, senha: senhaHash, endereco

        });

        const resultado = await novoUsuario.save();

        res.json(resultado)

    }

    static async cadastrarAdm(req, res) {
        try {
            const { nome, admin, email, senha, endereco } = req.body
            let senhaHash = bcrypt.hashSync(senha)
            let novoUsuario = new Usuario({
                nome, admin, email, senha: senhaHash, endereco
            });


            const resultado = await novoUsuario.save();
            res.json(resultado)

        } catch (error) {
            console.log(error)
            res.json()

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
        const { nome, email, senha, endereco } = req.body

        try {

            const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, { nome, email, senha, endereco });

            return res.status(200).json(usuarioAtualizado);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }

    }

    static async login(req, res) {

        try {
            const { email, senha } = req.body

            const usuario = await Usuario.findOne({ email })

            if (!usuario) throw new Error('E-mail ou senha Incorretos estão incorretos, tente novamente!')
            const checkarSenha = await bcrypt.compare(senha, usuario.senha)

            if (!checkarSenha) throw new Error('Senha Inválida')
            const token = jwt.sign({
                id: usuario._id,
                nome: usuario.nome,
                email: usuario.email,
                admin: usuario.admin
            },

                "2023",
                { expiresIn: "7d" }
            );

            res.header('token', token);

            res.status(200).json({ mensagem: "Login realizado." });

        } catch (error) {
            console.log(error)
            res.status(401).json({ message: error.message })
        }
    }
}


export default UsuarioController