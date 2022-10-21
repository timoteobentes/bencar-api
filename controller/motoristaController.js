const Motorista = require("../model/Motorista");

module.exports = {

    // Função que lista os dados do BD
    async consulta(req, res) {
        try {
            const motoristas = await Motorista.find();

            return res.status(200).json(motoristas);
        } catch(error) {
            return res.status(500).json({ error: error });
        }
    },

    // Função que cadastra novo motorista no BD
    async inserir(req, res) {
        const { nome, cpf, telefone, placaCarro } = req.body;
        
        const motorista = {
            nome,
            cpf,
            telefone,
            placaCarro
        }

        try {
            await Motorista.create(motorista);

            return res.status(201).json(motorista);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    },

    // Função que edita dados do motorista no BD
    async editar(req, res) {
        const id = await Motorista.findById(req.params.id)

        const { nome, cpf, telefone, placaCarro } = req.body;

        const motorista = {
            nome,
            cpf,
            telefone,
            placaCarro
        }

        try {
            await Motorista.updateOne(id, motorista);

            res.status(200).json(motorista);
        } catch(error) {
            return res.status(500).json({ error: error });
        }
    },

    // Função que deleta motorista do BD
    async deletar(req, res) {
        const motorista = await Motorista.findById(req.params.id);

        try {
            await Motorista.deleteOne(motorista);

            return res.status(200).json({ message: "Motorista removido com sucesso!!" });
        } catch(error) {
            return res.status(500).json({ error: error });
        }
    }
}