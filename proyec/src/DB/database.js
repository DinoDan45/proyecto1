import mysql from 'mysql2/promise';
import config from '../config.js';

const connection = mysql.createConnection({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbTrafico,
  port: config.dbPort,
});

const createConnection = () => {
  return connection;
};

export { createConnection };
