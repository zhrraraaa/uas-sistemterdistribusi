require('dotenv').config();
const express = require('express');
const db = require('./src/config/database');
const itemRoutes = require('./src/routes/item.route');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use('/api', itemRoutes);

app.get('/', (req, res) => {
  res.send('Item Service ready');
});

app.listen(PORT, () => {
  console.log(`Item Service running on port ${PORT}`);
});
