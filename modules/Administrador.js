const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdministradorSchema = new Schema({
  correo: {
    type: String,
    required: [true, 'El correo es requerido'],
    match: [/.+@.+\..+/, 'Por favor, ingresa un correo electrónico válido'],
    unique: true  // Asegura que el correo sea único
  },

  password: {
    type: String,
    required: [true, 'La contraseña es requerida'],
    minlength: [5, 'La contraseña debe tener al menos 5 caracteres'],
    maxlength: [30, 'La contraseña no puede tener más de 30 caracteres']
  }
});

// Crear el modelo de Administrador
const Administrador = mongoose.model('Administrador', AdministradorSchema);

module.exports = Administrador;
