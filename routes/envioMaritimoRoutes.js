const express = require('express');
const router = express.Router();
const envioMaritimoController = require('../controllers/envioMaritimoController');

// Ruta para obtener todos los envíos marítimos
router.get('/', envioMaritimoController.getAllEnviosMaritimos);

// Ruta para crear un nuevo envío marítimo
router.post('/', envioMaritimoController.createEnvioMaritimo);

// Ruta para obtener un envío marítimo por su ID
router.get('/:id', envioMaritimoController.getEnvioMaritimoById);

// Ruta para actualizar un envío marítimo por su ID
router.put('/:id', envioMaritimoController.updateEnvioMaritimoById);

// Ruta para eliminar un envío marítimo por su ID
router.delete('/:id', envioMaritimoController.deleteEnvioMaritimoById);

module.exports = router;
