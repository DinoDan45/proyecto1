import { config } from 'dotenv';

config();

export default {
  port: process.env.PORT || 1434,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_SERVER,
  dbPort: process.env.DB_PORT || 1433,
};