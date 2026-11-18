const express = require('express');
const app = express();
const { createClient } = require('redis');
const client = createClient({ url: process.env.REDIS_URL });
client.on('error', (err) => console.error('Redis connection error:', err.message));
client.connect().catch(err => console.error('Redis initial connection:', err.message));
app.get('/health', async (_req, res) => {
  try { if (!client.isReady) throw new Error('Redis not ready'); await client.ping(); res.json({ service: 'whatsapp', status: 'ok', redis: 'connected' }); }
  catch { res.status(503).json({ service: 'whatsapp', status: 'unavailable' }); }
});
app.listen(process.env.PORT || 4002, '0.0.0.0', () => console.log('whatsapp-service listening'));
