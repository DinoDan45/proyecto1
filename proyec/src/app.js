import express from 'express';
import morgan from 'morgan';
import usuarioRoutes from './routes/authroutes.js';
import categoriaRoutes from './routes/categorias.js';
import productoRoutes from './routes/productos.js';
import carritoRoutes from './routes/carrito.js';
import { createConnection } from './DB/database.js';

const app = express();

// Configurar el puerto
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Conectar a la base de datos
createConnection()
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));

// Rutas
app.use('/api', usuarioRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/carrito', carritoRoutes);

export default app;