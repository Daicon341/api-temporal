const AdministradorSchema = require('../modules/Administrador');

// Listar Administradores
const listAdministradores = async (req, res) => {
    try {
        const administradores = await AdministradorSchema.find();

        if (!administradores) return res.status(404).json({ message: "Administradores no encontrados" });

        res.json(administradores);
    } catch (error) {
        res.status(500).json({ message: `Error al obtener los Administradores: ${error.message}` });
    }
};

// Crear Administrador
const createAdministrador = async (req, res) => {
    try {
        const administrador = new AdministradorSchema(req.body);
        const savedAdministrador = await administrador.save();
        res.status(201).json(savedAdministrador);
    } catch (error) {
        res.status(500).json({ message: `Error al crear el Administrador: ${error.message}` });
    }
};

// Obtener un Administrador por ID
const getAdministradorById = async (req, res) => {
    try {
        const { id } = req.params;

        const administrador = await AdministradorSchema.findById(id);

        if (!administrador) return res.status(404).json({ message: "Administrador no encontrado" });
        res.status(302).json(administrador);
    } catch (error) {
        res.status(500).json({ message: `Error al obtener el Administrador: ${error.message}` });
    }
};

// Actualizar un Administrador
const updateAdministrador = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updatedAdministrador = await AdministradorSchema.findByIdAndUpdate(
            id,
            { $set: body },
            { new: true, runValidators: true }
        );

        if (!updatedAdministrador) return res.status(404).json({ message: "Administrador no encontrado" });

        res.json(updatedAdministrador);
    } catch (error) {
        res.status(500).json({ message: `Error al actualizar el Administrador: ${error.message}` });
    }
};

// Eliminar un Administrador
const deleteAdministrador = async (req, res) => {
    const { id } = req.params;

    try {
        const administrador = await AdministradorSchema.findByIdAndDelete(id);

        if (!administrador) return res.status(404).json({ message: "Administrador no encontrado" });

        res.status(200).json(administrador);
    } catch (error) {
        res.status(500).json({ message: `Error al eliminar el Administrador: ${error.message}` });
    }
};

module.exports = {
    listAdministradores,
    createAdministrador,
    getAdministradorById,
    updateAdministrador,
    deleteAdministrador
};
