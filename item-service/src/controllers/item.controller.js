const db = require('../config/database');
const axios = require('axios');


//create
exports.createItem = async (req, res) => {
  const { name, price, category_id } = req.body;

  if (!name || !price || !category_id) {
    return res.status(400).json({
      message: 'name, price, dan category_id wajib diisi'
    });
  }

try {
    //komunikasi ke category-service
    await axios.get(`http://localhost:3001/api/categories/${category_id}`);
  } catch (error) {
    return res.status(400).json({
      message: 'Kategori tidak valid / tidak ditemukan'
    });
  }
  
  const query = `
    INSERT INTO items (name, price, category_id)
    VALUES (?, ?, ?)
  `;

  db.query(query, [name, price, category_id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'Gagal menambahkan item',
        error: err
      });
    }

    res.status(201).json({
      message: 'Item berhasil ditambahkan',
      data: {
        id: result.insertId,
        name,
        price,
        category_id
      }
    });
  });
};

//get
exports.getAllItems = (req, res) => {
  const query = 'SELECT * FROM items';

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: 'Gagal mengambil data item',
        error: err
      });
    }

    res.status(200).json({
      message: 'Berhasil mengambil data item',
      data: results
    });
  });
};

//update
exports.updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, category_id } = req.body;

  if (!name || !price || !category_id) {
    return res.status(400).json({
      message: 'name, price, dan category_id wajib diisi'
    });
  }

  const query = `
    UPDATE items 
    SET name = ?, price = ?, category_id = ?
    WHERE id = ?
  `;

  db.query(query, [name, price, category_id, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'Gagal update item',
        error: err
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Item tidak ditemukan'
      });
    }

    res.status(200).json({
      message: 'Item berhasil diupdate',
      data: {
        id,
        name,
        price,
        category_id
      }
    });
  });
};

//delete
exports.deleteItem = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM items WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'Gagal menghapus item',
        error: err
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Item tidak ditemukan'
      });
    }

    res.status(200).json({
      message: 'Item berhasil dihapus'
    });
  });
};
