const ProductosSchema = require('../modules/Producto');

// Listar Productos
const listProductos = async (req, res) => {
    try {
        // Realizar la consulta con Mongoose utilizando 'populate' según los campos requeridos
        const productos = await ProductosSchema.find();

        if (!productos) return res.status(404).json({ message: "Productos no encontrados" });

        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: `Error al obtener los Productos: ${error.message}` });
    }
};

// Crear Producto
const createProducto = async (req, res) => {
    try {
        const producto = new ProductosSchema(req.body);
        const savedProducto = await producto.save();
        res.status(201).json(savedProducto);
    } catch (error) {
        res.status(500).json({ message: `Error al crear el Producto: ${error.message}` });
    }
};

// Obtener un Producto por ID
const getProductoById = async (req, res) => {
    try {
        const { id } = req.params;

        const producto = await ProductosSchema.findById(id);

        if (!producto) return res.status(404).json({ message: "Producto no encontrado" });
        res.status(302).json(producto);
    } catch (error) {
        res.status(500).json({ message: `Error al obtener el Producto: ${error.message}` });
    }
};

// Actualizar un Producto
const updateProducto = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updatedProducto = await ProductosSchema.findByIdAndUpdate(
            id,
            { $set: body },
            { new: true, runValidators: true }
        );

        if (!updatedProducto) return res.status(404).json({ message: "Producto no encontrado" });

        res.json(updatedProducto);
    } catch (error) {
        res.status(500).json({ message: `Error al actualizar el Producto: ${error.message}` });
    }
};

// Eliminar un Producto
const deleteProducto = async (req, res) => {
    const { id } = req.params;

    try {
        const producto = await ProductosSchema.findByIdAndDelete(id);

        if (!producto) return res.status(404).json({ message: "Producto no encontrado" });

        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: `Error al eliminar el Producto: ${error.message}` });
    }
};

module.exports = {
    createProducto,
    listProductos,
    getProductoById,
    updateProducto,
    deleteProducto
};
