const express = require('express');
const db = require('./src/config/database');
const categoryRoutes = require('./src/routes/category.route');

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/api', categoryRoutes);

app.get('/', (req, res) => {
  res.send('Category Service Jalan');
});

app.listen(PORT, () => {
  console.log(`Category Service running di port ${PORT}`);
});
