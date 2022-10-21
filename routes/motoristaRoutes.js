const router = require("express").Router();
const Motorista = require("../model/Motorista");

router.post("/", (req, res) => {
    const { nome, cpf, telefone, placaCarro } = req.body;

    const motorista = {
        nome,
        cpf,
        telefone,
        placaCarro
    }

    try {
        Motorista.create(motorista);

        res.status(201).send({ message: "Motorista cadastrado com sucesso!" });
    } catch(error) {
        console.log(error);
    }
})

module.exports = router;