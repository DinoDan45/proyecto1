import { config } from 'dotenv';

config();

export default {
  port: process.env.PORT || 5500,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT || 15460,
  dbName: process.env.DB_NAME,
};

