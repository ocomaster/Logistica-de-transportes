const Cliente = require('../models/cliente');

// Obtener todos los clientes
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
  const cliente = new Cliente(req.body);
  try {
    await cliente.save();
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un cliente por su ID
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (cliente == null) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un cliente por su ID
exports.updateClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (cliente == null) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un cliente por su ID
exports.deleteClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (cliente == null) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json({ message: 'Cliente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
