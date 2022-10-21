const mongoose = require("mongoose");

async function conexao() {
    try {
        const mongooseParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(process.env.MONGO_URI, mongooseParams);
        console.log("Conectado ao Banco!");
    } catch(error) {
        console.log("Erro ao conectar...");
    }
}

module.exports = conexao;