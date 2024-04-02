const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  // Otros campos que puedan ser necesarios, como email, teléfono, etc.
});

module.exports = mongoose.model('Cliente', clienteSchema);
