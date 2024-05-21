import dotenv from 'dotenv';
dotenv.config();

//import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import usuarioRoutes from './routes/authroutes.js';
import productoRoutes from './routes/productos.js';
import carritoRoutes from './routes/carrito.js';
import categoriasRoutes from './routes/categorias.js';
import { createConnection } from './DB/database.mjs';

// Crear instancia de express
const app = express();

// Configurar el puerto
const port = process.env.PORT || 3000;
app.set('port', port);

// Middleware
//app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Conectar a la base de datos
createConnection()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

// Rutas
app.use('/api/auth', usuarioRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/categorias', categoriasRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
