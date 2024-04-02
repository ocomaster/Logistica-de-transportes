const express = require('express');
const router = express.Router();
const envioTerrestreController = require('../controllers/envioTerrestreController');

// Ruta para obtener todos los envíos terrestres
router.get('/', envioTerrestreController.getAllEnviosTerrestres);

// Ruta para crear un nuevo envío terrestre
router.post('/', envioTerrestreController.createEnvioTerrestre);

// Ruta para obtener un envío terrestre por su ID
router.get('/:id', envioTerrestreController.getEnvioTerrestreById);

// Ruta para actualizar un envío terrestre por su ID
router.put('/:id', envioTerrestreController.updateEnvioTerrestreById);

// Ruta para eliminar un envío terrestre por su ID
router.delete('/:id', envioTerrestreController.deleteEnvioTerrestreById);

module.exports = router;
