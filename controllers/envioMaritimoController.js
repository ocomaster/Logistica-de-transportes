const EnvioMaritimo = require('../models/envioMaritimo');

// Obtener todos los envíos marítimos
exports.getAllEnviosMaritimos = async (req, res) => {
  try {
    const enviosMaritimos = await EnvioMaritimo.find();
    res.json(enviosMaritimos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo envío marítimo
exports.createEnvioMaritimo = async (req, res) => {
  const envioMaritimo = new EnvioMaritimo(req.body);
  try {
    await envioMaritimo.save();
    res.status(201).json(envioMaritimo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un envío marítimo por su ID
exports.getEnvioMaritimoById = async (req, res) => {
  try {
    const envioMaritimo = await EnvioMaritimo.findById(req.params.id);
    if (envioMaritimo == null) {
      return res.status(404).json({ message: 'Envío marítimo no encontrado' });
    }
    res.json(envioMaritimo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un envío marítimo por su ID
exports.updateEnvioMaritimoById = async (req, res) => {
  try {
    const envioMaritimo = await EnvioMaritimo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (envioMaritimo == null) {
      return res.status(404).json({ message: 'Envío marítimo no encontrado' });
    }
    res.json(envioMaritimo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un envío marítimo por su ID
exports.deleteEnvioMaritimoById = async (req, res) => {
  try {
    const envioMaritimo = await EnvioMaritimo.findByIdAndDelete(req.params.id);
    if (envioMaritimo == null) {
      return res.status(404).json({ message: 'Envío marítimo no encontrado' });
    }
    res.json({ message: 'Envío marítimo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
