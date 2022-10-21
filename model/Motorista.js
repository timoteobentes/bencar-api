// Dependencias
const mongoose = require("mongoose");

// Schema da coleção(tabela)
const motoristaSchema = mongoose.Schema({
    nome: {
        type: String
    },
    cpf: {
        type: String
    },
    telefone: {
        type: String
    },
    placaCarro: {
        type: String
    }
});

module.exports =  mongoose.model("Motorista", motoristaSchema);