const express = require('express');
const {
    createServicio,
    listServicios,
    getServicioById,
    updateServicio,
    deleteServicio
} = require('../controllers/ServicioController');

const router = express.Router();

// Rutas CRUD para servicios
router.get('/servicios', listServicios); // Listar servicios
router.post('/servicios', createServicio); // Crear servicio
router.get('/servicios/:id', getServicioById); // Obtener servicio por ID
router.put('/servicios/:id', updateServicio); // Actualizar servicio por ID
router.delete('/servicios/:id', deleteServicio); // Eliminar servicio por ID

module.exports = router;
