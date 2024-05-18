import { createConnection } from '../DB/database.js';

const getUsuarios = async (req, res) => {
  try {
    const connection = await createConnection();
    const result = await connection.query('SELECT * FROM dbo.Usuarios');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error querying the database: ', err);
    res.status(500).send('Server error');
  }
};

const authenticateUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const connection = await createConnection();
    const result = await connection.query`SELECT * FROM dbo.Usuarios WHERE id_usuario = ${username} AND contraseña = ${password}`;
    if (result.recordset.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    console.error('Error querying the database: ', err);
    res.status(500).send('Server error');
  }
};

export const controladores = {
  getUsuarios,
  authenticateUser,
};
