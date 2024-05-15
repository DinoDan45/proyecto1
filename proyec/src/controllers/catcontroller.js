import { createConnection } from '../DB/database.js';

const getCategories = async (req, res) => {
  const connection = await createConnection();
  const [rows] = await connection.query('SELECT * FROM categorias');
  res.json(rows);
};

export const categoryController = {
  getCategories,
};
