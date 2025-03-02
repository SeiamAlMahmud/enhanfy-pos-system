import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER || 'repwoo5_posdata', // 'postgres'
  host: process.env.PGHOST || 'localhost', // 'localhost'
  database: process.env.PGDATABASE || 'repwoo5_pos', // 'POS-System'
  password: process.env.PGPASSWORD || '123posdata67', // 'admin'
  port: process.env.PGPORT || 5432, // PostgreSQL port (5432)
});

// Export a reusable query function
export const query = (text, params) => {
  return pool.query(text, params);
};
