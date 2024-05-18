import { createConnection } from '../DB/database.js';

const getProductosByCategoria = async (req, res) => {
  const { categoriaId } = req.params;
  try {
    const connection = await createConnection();
    const result = await connection.query`SELECT * FROM dbo.Productos WHERE id_categoria = ${id_categoria}`;
    res.json(result.recordset);
  } catch (err) {
    console.error('Error querying the database: ', err);
    res.status(500).send('Server error');
  }
};

export const controladores = {
  getProductosByCategoria,
};

