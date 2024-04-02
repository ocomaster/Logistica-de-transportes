const mongoose = require('mongoose');

const envioMaritimoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  tipoProducto: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  },
  fechaEntrega: {
    type: Date,
    required: true
  },
  puertoEntrega: {
    type: String,
    required: true
  },
  precioEnvio: {
    type: Number,
    required: true
  },
  numeroFlota: {
    type: String,
    required: true,
    match: /^[A-Z]{3}\d{4}[A-Z]$/
  },
  numeroGuia: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10
  }
});

module.exports = mongoose.model('EnvioMaritimo', envioMaritimoSchema);
