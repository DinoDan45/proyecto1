import mssql from 'mssql';
const { ConnectionPool } = mssql;
import config from '../config.js';

const createConnection = async () => {
  try {
    const pool = new ConnectionPool({
      user: config.dbUser,
      password: config.dbPassword,
      server: config.dbHost,
      port: parseInt(config.dbPort, 10),
      database: config.dbName,
      options: {
        trustServerCertificate: true, // conexiones locales
      },
    });

    await pool.connect();
    console.log('Database connected');
    return pool;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};

export { createConnection };
