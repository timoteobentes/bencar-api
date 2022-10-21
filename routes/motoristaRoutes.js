// Dependencias
const router = require("express").Router();
const motoristaController = require("../controller/motoristaController");

// GET - exibe lista de motoristas
router.get("/consulta", motoristaController.consulta);

// POST - cadastra motorista
router.post("/cadastro", motoristaController.inserir);

// PUT - edita motorista
router.put("/editar", motoristaController.editar);

// DELETE - deleta motorista
router.delete("/deletar", motoristaController.deletar);

module.exports = router;