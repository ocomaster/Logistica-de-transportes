const EnvioTerrestre = require('../models/envioTerrestre');

// Obtener todos los envíos terrestres
exports.getAllEnviosTerrestres = async (req, res) => {
  try {
    const enviosTerrestres = await EnvioTerrestre.find();
    res.json(enviosTerrestres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo envío terrestre
exports.createEnvioTerrestre = async (req, res) => {
  const envioTerrestre = new EnvioTerrestre(req.body);
  try {
    await envioTerrestre.save();
    res.status(201).json(envioTerrestre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un envío terrestre por su ID
exports.getEnvioTerrestreById = async (req, res) => {
  try {
    const envioTerrestre = await EnvioTerrestre.findById(req.params.id);
    if (envioTerrestre == null) {
      return res.status(404).json({ message: 'Envío terrestre no encontrado' });
    }
    res.json(envioTerrestre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un envío terrestre por su ID
exports.updateEnvioTerrestreById = async (req, res) => {
  try {
    const envioTerrestre = await EnvioTerrestre.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (envioTerrestre == null) {
      return res.status(404).json({ message: 'Envío terrestre no encontrado' });
    }
    res.json(envioTerrestre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un envío terrestre por su ID
exports.deleteEnvioTerrestreById = async (req, res) => {
  try {
    const envioTerrestre = await EnvioTerrestre.findByIdAndDelete(req.params.id);
    if (envioTerrestre == null) {
      return res.status(404).json({ message: 'Envío terrestre no encontrado' });
    }
    res.json({ message: 'Envío terrestre eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
