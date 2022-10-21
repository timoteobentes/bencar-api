const mongoose = require("mongoose");

const Motorista = mongoose.model("Motorista", {
    nome: String,
    cpf: String,
    telefone: String,
    placaCarro: String
});

module.exports = Motorista;