//import { createConnection } from '../DB/database.js';
import sql from 'mssql';
import config from '../config.js';

export const getAllCategorias = async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM dbo.Categorias WHERE activo = 1');
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};