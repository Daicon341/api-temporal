const express = require('express');
const {
    createProducto,
    listProductos,
    getProductoById,
    updateProducto,
    deleteProducto
} = require('../controllers/ProductoController');

const router = express.Router();

// Rutas CRUD para productos
router.get('/productos', listProductos); // Listar productos
router.post('/productos', createProducto); // Crear producto
router.get('/productos/:id', getProductoById); // Obtener producto por ID
router.put('/productos/:id', updateProducto); // Actualizar producto por ID
router.delete('/productos/:id', deleteProducto); // Eliminar producto por ID

module.exports = router;
