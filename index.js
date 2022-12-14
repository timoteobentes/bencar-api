// Dependencias
require("dotenv").config();
const express = require("express");
const app = express();
const conexao = require("./db");
const cors = require("cors");

// Conexão com Banco de Dados
conexao();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// rotas
const motorista = require("./routes/motoristaRoutes");
app.use("/", motorista);

// Porta de uso
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT}...`);
});