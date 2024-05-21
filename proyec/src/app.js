import express from 'express';
import morgan from 'morgan';
import usuarioRoutes from './routes/authroutes.js';
import productoRoutes from './routes/producto.js';
import carritoRoutes from './routes/carrito.js';
import categoriasRoutes from './routes/categorias.js';
import { createConnection } from './DB/database.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Configurar el puerto
const port = process.env.PORT || 5040;
app.set('port', port);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Conectar a la base de datos
createConnection()
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));

// Rutas
app.use('/api', usuarioRoutes);
app.use('/api', productoRoutes);
app.use('/api', carritoRoutes);
app.use('/api', categoriasRoutes);

// Iniciar el servidor
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
