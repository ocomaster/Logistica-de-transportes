const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const clienteRoutes = require('./routes/clienteRoutes');
const envioTerrestreRoutes = require('./routes/envioTerrestreRoutes');
const envioMaritimoRoutes = require('./routes/envioMaritimoRoutes');
const {config} = require('dotenv');
config();

const app = express();

// Configurar body-parser para procesar JSON
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME});
  const db = mongoose.connection

  
 //Middleware de autenticación con JWT
//  app.use((req, res, next) => {
//    const token = req.headers.authorization;
//    if (!token) {
//      return res.status(401).json({ message: 'Token de autenticación no proporcionado' });
//    }
//    jwt.verify(token.split(' ')[1], 'secreto', (err, decoded) => {
//      if (err) {
//        return res.status(401).json({ message: 'Token de autenticación inválido' });
//      }
//      req.userData = decoded;
//      next();
//    });
//  });
//Descomentar para validacion de seguridad con JWT

// Rutas
app.use('/clientes', clienteRoutes);
app.use('/envios-terrestres', envioTerrestreRoutes);
app.use('/envios-maritimos', envioMaritimoRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
