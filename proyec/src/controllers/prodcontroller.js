import sql from 'mssql';
import config from '../config.js';

export const getCategories = async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM dbo.Categorias');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).send('Error del servidor');
  }
};

export const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('categoryId', sql.Int, categoryId)
      .query('SELECT * FROM dbo.Productos WHERE id_categoria = @categoryId');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    res.status(500).send('Error del servidor');
  }
};

export const addToCart = async (req, res) => {
  const { id_usuario, id_producto, cantidad } = req.body;
  try {
    const pool = await sql.connect(config);
    await pool.request()
      .input('id_usuario', sql.UniqueIdentifier, id_usuario)
      .input('id_producto', sql.Int, id_producto)
      .input('cantidad', sql.Int, cantidad)
      .query('INSERT INTO dbo.Carrito (id_usuario, id_producto, cantidad) VALUES (@id_usuario, @id_producto, @cantidad)');
    res.json({ success: true });
  } catch (err) {
    console.error('Error al añadir producto al carrito:', err);
    res.status(500).send(err.message);
  }
};
