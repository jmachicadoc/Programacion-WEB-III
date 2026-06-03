import {
  obtTodas,
  obtCategoria,
  obtProductosDeCategoria,
  inserta,
  actualiza,
  elimina
} from '../modelos/categoriaModelo.js';

// 1 POST /categorias
export const insertaCategoria = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    if (!nombre) {
      return res.status(400).json({ error: 'El nombre es obligatorio' });
    }
    const nueva = await inserta({ nombre, descripcion });
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 2 GET /categorias
export const obtCategorias = async (req, res) => {
  try {
    const categorias = await obtTodas();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 3 GET /categorias/:id  (categoría + sus productos)
export const obtCategoriaPorID = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await obtCategoria(id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    const productos = await obtProductosDeCategoria(id);
    res.status(200).json({ ...categoria, productos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 4 PATCH /categorias/:id
export const actualizaCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await obtCategoria(id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    const { nombre, descripcion } = req.body;
    const actualizada = await actualiza(id, {
      nombre: nombre ?? categoria.nombre,
      descripcion: descripcion ?? categoria.descripcion
    });
    res.status(200).json(actualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 5 DELETE /categorias/:id
export const eliminaCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await obtCategoria(id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    await elimina(id);
    res.status(200).json({
      mensaje: 'Categoría y sus productos eliminados correctamente'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};