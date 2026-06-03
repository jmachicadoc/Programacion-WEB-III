import express from 'express';
import {
  obtCategorias,
  obtCategoriaPorID,
  insertaCategoria,
  actualizaCategoria,
  eliminaCategoria
} from '../controladores/categoriaControlador.js';

const rutas = express.Router();

rutas.post('/', insertaCategoria);        // Ej1
rutas.get('/', obtCategorias);            // Ej2
rutas.get('/:id', obtCategoriaPorID);     // Ej3
rutas.patch('/:id', actualizaCategoria);  // Ej4
rutas.delete('/:id', eliminaCategoria);   // Ej5

export default rutas;