import sql from 'mssql';
import config from '../config.js';

const dbConfig = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbHost,
  database: config.dbName,
  port: parseInt(config.dbPort, 10),
  options: {
    trustServerCertificate: true, // Cambiar a true si está desarrollando localmente
  },
};

const createConnection = async () => {
  try {
    await sql.connect(dbConfig);
    console.log('Connected to SQL Server');
    return sql;
  } catch (err) {
    console.error('Database connection failed: ', err);
  }
};

export { createConnection };
