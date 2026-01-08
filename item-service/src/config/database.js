const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'item_db',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('DB item connection failed:', err);
  } else {
    console.log('Database item connected');
  }
});

module.exports = db;
