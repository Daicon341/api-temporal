const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');

// Importar las rutas
const productoRoutes = require('./routes/Producto');
const servicioRoutes = require('./routes/Servicio');
const administradorRoutes = require('./routes/Administrador');

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Usar las rutas para productos
app.use('/api', productoRoutes);

// Usar las rutas para servicios
app.use('/api', servicioRoutes);

// usa Laas rutaas para Administrador
app.use('/api', administradorRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = app;