import { pool } from '../config/bd.js';

export const obtTodas = async () => {
  const [resultado] = await pool.query('SELECT * FROM categorias');
  return resultado;
};

export const obtCategoria = async (id) => {
  const [resultado] = await pool.query(
    'SELECT * FROM categorias WHERE id = ?', [id]
  );
  return resultado[0];
};

export const obtProductosDeCategoria = async (id) => {
  const [resultado] = await pool.query(
    'SELECT * FROM productos WHERE categoria_id = ?', [id]
  );
  return resultado;
};

export const inserta = async (categoria) => {
  const { nombre, descripcion } = categoria;
  const [resultado] = await pool.query(
    'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
    [nombre, descripcion]
  );
  return { id: resultado.insertId, nombre, descripcion };
};

export const actualiza = async (id, categoria) => {
  const { nombre, descripcion } = categoria;
  await pool.query(
    'UPDATE categorias SET nombre = ?, descripcion = ?, updatedAt = current_timestamp() WHERE id = ?',
    [nombre, descripcion, id]
  );
  return { id, nombre, descripcion };
};

export const elimina = async (id) => {
  await pool.query('DELETE FROM productos WHERE categoria_id = ?', [id]);
  await pool.query('DELETE FROM categorias WHERE id = ?', [id]);
  return id;
};