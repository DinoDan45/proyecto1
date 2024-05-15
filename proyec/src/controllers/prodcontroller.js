import { createConnection } from '../DB/database.js';

const getProductsByCategory = async (req, res) => {
const { categoryId } = req.params;
const connection = await createConnection();
  const [rows] = await connection.query('SELECT * FROM productos WHERE categoria_id = ?', [categoryId]);
res.json(rows);
};

export const productController = {
getProductsByCategory,
};
