import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/routes.js';
import authroutes from './routes/authroutes.js';
import router from './routes/authroutes.js';

//instancia de express
const app = express();

//PORT
app.set('port', process.env.PORT || 5040);

//Routes
app.use('/api', router);
app.use('/api/auth', authRouter)

//Midelware
app.use(morgan('dev'));
app.use(express.json());

//Starting the server
export default app;
