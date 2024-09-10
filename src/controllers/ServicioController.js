const ServiciosSchema = require('../modules/Servicio');

// Listar Servicios
const listServicios = async (req, res) => {
    try {
        // Realizar la consulta con Mongoose utilizando 'populate' según los campos requeridos
        const servicios = await ServiciosSchema.find();

        if (!servicios) return res.status(404).json({ message: "Servicios no encontrados" });

        res.json(servicios);
    } catch (error) {
        res.status(500).json({ message: `Error al obtener los Servicios: ${error.message}` });
    }
};

// Crear Servicio
const createServicio = async (req, res) => {
    try {
        const servicio = new ServiciosSchema(req.body);
        const savedServicio = await servicio.save();
        res.status(201).json(savedServicio);
    } catch (error) {
        res.status(500).json({ message: `Error al crear el Servicio: ${error.message}` });
    }
};

// Obtener un Servicio por ID
const getServicioById = async (req, res) => {
    try {
        const { id } = req.params;

        const servicio = await ServiciosSchema.findById(id);

        if (!servicio) return res.status(404).json({ message: "Servicio no encontrado" });
        res.status(302).json(servicio);
    } catch (error) {
        res.status(500).json({ message: `Error al obtener el Servicio: ${error.message}` });
    }
};

// Actualizar un Servicio
const updateServicio = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updatedServicio = await ServiciosSchema.findByIdAndUpdate(
            id,
            { $set: body },
            { new: true, runValidators: true }
        );

        if (!updatedServicio) return res.status(404).json({ message: "Servicio no encontrado" });

        res.json(updatedServicio);
    } catch (error) {
        res.status(500).json({ message: `Error al actualizar el Servicio: ${error.message}` });
    }
};

// Eliminar un Servicio
const deleteServicio = async (req, res) => {
    const { id } = req.params;

    try {
        const servicio = await ServiciosSchema.findByIdAndDelete(id);

        if (!servicio) return res.status(404).json({ message: "Servicio no encontrado" });

        res.status(200).json(servicio);
    } catch (error) {
        res.status(500).json({ message: `Error al eliminar el Servicio: ${error.message}` });
    }
};

module.exports = {
    createServicio,
    listServicios,
    getServicioById,
    updateServicio,
    deleteServicio
};
