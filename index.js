// Dependencias
require("dotenv").config();
const express = require("express");
const app = express();
const conexao = require("./db");

// Conexão com Banco de Dados
conexao();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rotas
const motorista = require("./routes/motoristaRoutes");

app.use("/", motorista);
app.get("/", (req, res) => {
    res.json({ message: "Oi" });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT}...`);
})