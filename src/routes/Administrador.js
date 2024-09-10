const express = require('express');
const {
    createAdministrador,
    listAdministradores,
    getAdministradorById,
    updateAdministrador,
    deleteAdministrador
} = require('../controllers/AdministradorController');

const router = express.Router();

// Rutas CRUD para administradores
router.get('/administradores', listAdministradores); // Listar administradores
router.post('/administradores', createAdministrador); // Crear administrador
router.get('/administradores/:id', getAdministradorById); // Obtener administrador por ID
router.put('/administradores/:id', updateAdministrador); // Actualizar administrador por ID
router.delete('/administradores/:id', deleteAdministrador); // Eliminar administrador por ID

module.exports = router;
