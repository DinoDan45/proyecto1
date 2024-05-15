import { createConnection } from '../DB/database.js';

const authenticateUser = async (req, res) => {
  const { username, password } = req.body;
  const connection = await createConnection();
  const [rows] = await connection.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [username, password]);

  if (rows.length > 0) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
};

export const authController = {
  authenticateUser,
};

