import mongoose from "mongoose";
import axios from "axios";

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  senha: {
    type: String,
    trim: true,
    required: true
  },

  admin: {
    type: Boolean,
    default: false
},

  endereco: {
    cep: {
      type: String,
      required: "Esse campo é obrigatório!"
    },
    logradouro: {
      type: String,
      
    },
    numero: {
      type: String,
      required: "Esse campo é obrigatório!"
    },
    complemento: {
      type: String
    },
    bairro: {
      type: String,
      
    },
    cidade: {
      type: String,
      
    },
    estado: {
      type: String,
      
    }
  }
});

// Função para buscar o endereço a partir do CEP
async function buscaEndereco(cep) {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  const { logradouro, bairro, localidade: cidade, uf: estado } = response.data;
  return { logradouro, bairro, cidade, estado };
}

// Middleware para buscar o endereço a partir do CEP antes de salvar o pedido
UsuarioSchema.pre("save", async function (next) {
  try {
    const endereco = this.endereco;
    const cep = endereco.cep.replace(/\D/g, ''); // Remove caracteres não numéricos do CEP
    const { logradouro, bairro, cidade, estado } = await buscaEndereco(cep);
    endereco.logradouro = logradouro;
    endereco.bairro = bairro;
    endereco.cidade = cidade;
    endereco.estado = estado;
    next();
  } catch (error) {
    next(error);
  }
});
const Usuario = mongoose.model('Usuario', UsuarioSchema)

export default Usuario