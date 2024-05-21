import sql from 'mssql';
import config from '../config.js';

export const registerUser = async (req, res) => {
  const { nombre, apellido, email, contrasena, telefono, direccion, ciudad, estado, pais } = req.body;
  try {
    const pool = await sql.connect(config);
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    await pool.request()
      .input('nombre', sql.VarChar, nombre)
      .input('apellido', sql.VarChar, apellido)
      .input('email', sql.VarChar, email)
      .input('contrasena', sql.VarChar, hashedPassword)
      .input('telefono', sql.VarChar, telefono)
      .input('direccion', sql.VarChar, direccion)
      .input('ciudad', sql.VarChar, ciudad)
      .input('estado', sql.VarChar, estado)
      .input('pais', sql.VarChar, pais)
      .query('INSERT INTO dbo.Usuarios (nombre, apellido, email, contrasena, telefono, direccion, ciudad, estado, pais) VALUES (@nombre, @apellido, @correo, @contrasena, @telefono, @direccion, @ciudad, @estado, @pais)');
    res.status(201).send('Usuario registrado exitosamente');
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).send('Error del servidor');
  }
};

export const authenticateUser = async (req, res) => {
  const { id_usuario, contrasena } = req.body;
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('id_usuario', sql.UniqueIdentifier, id_usuario)
      .input('contrasena', sql.VarChar, contrasena) 
      .query('SELECT * FROM dbo.Usuarios WHERE id_usuario = @id_usuario AND contrasena = @contrasena');
    const user = result.recordset[0];

    if (user) {
      res.json({ success: true, message: 'Autenticación exitosa' });
    } else {
      res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    res.status(500).send('Error del servidor');
  }
};
