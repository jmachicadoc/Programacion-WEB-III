import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'admin',        //usuario
  password: '12345',    //contraseña
  database: 'practica2'
});