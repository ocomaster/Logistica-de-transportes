const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Ruta para obtener todos los clientes
router.get('/', clienteController.getAllClientes);

// Ruta para crear un nuevo cliente
router.post('/', clienteController.createCliente);

// Ruta para obtener un cliente por su ID
router.get('/:id', clienteController.getClienteById);

// Ruta para actualizar un cliente por su ID
router.put('/:id', clienteController.updateClienteById);

// Ruta para eliminar un cliente por su ID
router.delete('/:id', clienteController.deleteClienteById);

module.exports = router;
