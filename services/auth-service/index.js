const express = require('express');
const app = express();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
app.get('/health', async (_req, res) => {
  try { await pool.query('SELECT 1'); res.json({ service: 'auth', status: 'ok', database: 'connected' }); }
  catch { res.status(503).json({ service: 'auth', status: 'unavailable' }); }
});
app.listen(process.env.PORT || 4001, '0.0.0.0', () => console.log('auth-service listening'));
