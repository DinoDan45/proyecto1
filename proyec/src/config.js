import { config } from 'dotenv';

config();

export default {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT || 10428,
  dbName: process.env.DB_NAME,
};
