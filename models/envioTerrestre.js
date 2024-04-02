const mongoose = require('mongoose');

const envioTerrestreSchema = new mongoose.Schema({
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
  bodegaEntrega: {
    type: String,
    required: true
  },
  precioEnvio: {
    type: Number,
    required: true
  },
  placaVehiculo: {
    type: String,
    required: true,
    match: /^[A-Z]{3}\d{3}$/
  },
  numeroGuia: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10
  }
});

module.exports = mongoose.model('EnvioTerrestre', envioTerrestreSchema);
