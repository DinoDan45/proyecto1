import { createConnection } from '../DB/database.js';

const getCategorias = async (req, res) => {
  try {
    const connection = await createConnection();
    const result = await connection.query('SELECT * FROM dbo.Categorías');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error querying the database: ', err);
    res.status(500).send('Server error');
  }
};

export const controladores = {
  getCategorias,
};
