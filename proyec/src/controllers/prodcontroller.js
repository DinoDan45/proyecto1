import sql from 'mssql';
import config from '../config';

const getCategories = async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query('SELECT * FROM dbo.Categorias WHERE activo = 1');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getProductsByCategory = async (req, res) => {
  const { id_categoria } = req.params;
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .input('id_categoria', sql.Int, id_categoria)
      .query('SELECT * FROM dbo.Productos WHERE id_categoria = @id_categoria AND activo = 1');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const addToCart = async (req, res) => {
  const { id_usuario, id_producto, cantidad } = req.body;
  try {
    let pool = await sql.connect(config);
    let result = await pool.request()
      .input('id_usuario', sql.UniqueIdentifier, id_usuario)
      .input('id_producto', sql.Int, id_producto)
      .input('cantidad', sql.Int, cantidad)
      .query('INSERT INTO dbo.Carrito (id_usuario, id_producto, cantidad) VALUES (@id_usuario, @id_producto, @cantidad)');
    res.json({ success: true });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { getCategories, getProductsByCategory, addToCart };
