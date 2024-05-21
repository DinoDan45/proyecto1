import sql from 'mssql';
import config from '../config.js';

export const addToCart = async (req, res) => {
const { id_usuario, id_producto, cantidad } = req.body;
try {
    const pool = await sql.connect(config);
    await pool.request()
    .input('id_usuario', sql.UniqueIdentifier, id_usuario)
    .input('id_producto', sql.Int, id_producto)
    .input('cantidad', sql.Int, cantidad)
    .query('INSERT INTO Carrito (id_usuario, id_producto, cantidad) VALUES (@id_usuario, @id_producto, @cantidad)');
    res.status(200).json({ success: true, message: 'Producto agregado al carrito' });
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al agregar el producto al carrito' });
}
};

export const getCartItems = async (req, res) => {
const { userId } = req.params;
try {
    const pool = await sql.connect(config);
    const result = await pool.request()
    .input('userId', sql.UniqueIdentifier, userId)
      .query('SELECT * FROM dbo.Carrito WHERE id_usuario = @userId');
    res.status(200).json(result.recordset);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener los items del carrito' });
}
};
