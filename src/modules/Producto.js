const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductosShema = new Schema({ 
    name: {
        type: String,
        required: [
            true, 'El nombre es requerido'
        ],
        minlength: [4, 'Nombre menor a 4 digitos'],
        maxlength: [50, 'Nombre mayor a 50 digitos']
    },

    description: {
        type: String,
        required: [
            true, 'La descripcion es requerida'
        ],
        minlength:[5, 'Descripción menor a 5 digitos'],
        maxlength: [200, 'Descripcion mayor a 200 digitos']
    },

    price: {
        type: Number,
        required: [
            true, 'The price field is required'
            ],
        minlength:[5, 'Precio menor a 5 digitos'],
        maxlength: [20, 'Precio mayor a 20 digitos']
    },
});

const Productos = mongoose.model('Productos', ProductosShema);

module.exports = Productos