const router = require("express").Router();
const Motorista = require("../model/Motorista");

router.post("/motorista", (req, res) => {

    const motorista = Motorista(req.body);

    motorista
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    // const { nome } = req.body;
 
    // if(!nome) {
    //     res.status(422).json({ message: "Complete os campos" });
    //     return;
    // }

    // const motorista = {
    //     nome
    // }

    // try {
    //     Motorista.create(motorista);

    //     res.status(201).json({ message: "Motorista cadastrado com sucesso!" });
    // } catch(error) {
    //     console.log(error);
    // }
})

module.exports = router;