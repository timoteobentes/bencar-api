const mongoose = require("mongoose");

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

const Motorista = mongoose.model("Motorista", motoristaSchema);
module.exports = Motorista;