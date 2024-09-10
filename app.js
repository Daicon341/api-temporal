const express = require('express');
// const connectDB = require('./config/database');
const cors = require('cors');
const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://ziriusdai:ziriusdai123@clustersamuel.a8kyk.mongodb.net/db_penesotes?retryWrites=true&w=majority&appName=ClusterSamuel'; // Reemplaza con tu cadena de conexión
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

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

const port = 4000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = app;