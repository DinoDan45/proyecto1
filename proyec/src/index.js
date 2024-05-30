import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usuarioRoutes from './routes/authroutes.js';
import productoRoutes from './routes/productos.js';
import carritoRoutes from './routes/carrito.js';
import categoriasRoutes from './routes/categorias.js';
import { createConnection } from './DB/database.mjs';

// express
const app = express();

// Configurar el puerto
const port = process.env.PORT || 1434;
app.set('port', port);

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());

// Conectar a la base de datos
createConnection()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

// Rutas
app.use('/api/login', usuarioRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/categorias', categoriasRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
