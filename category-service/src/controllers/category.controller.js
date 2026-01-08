const db = require('../config/database');

//create
exports.createCategory = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: 'Nama kategori wajib diisi'
    });
  }

  const query = 'INSERT INTO categories (name) VALUES (?)';

  db.query(query, [name], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'Gagal menambahkan kategori',
        error: err
      });
    }

    res.status(201).json({
      message: 'Kategori berhasil ditambahkan',
      data: {
        id: result.insertId,
        name: name
      }
    });
  });
};

//get all
exports.getAllCategories = (req, res) => {
  const query = 'SELECT * FROM categories';

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: 'Gagal mengambil data kategori',
        error: err
      });
    }

    res.status(200).json({
      message: 'Berhasil mengambil data kategori',
      data: results
    });
  });
};

//get by id
exports.getCategoryById = (req, res) => {
  const { id } = req.params;

  const query = 'SELECT * FROM categories WHERE id = ?';

  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        message: 'Gagal mengambil kategori',
        error: err
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: 'Kategori tidak ditemukan'
      });
    }

    res.status(200).json({
      data: results[0]
    });
  });
};


//update
exports.updateCategory = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: 'Nama kategori wajib diisi'
    });
  }

  const query = 'UPDATE categories SET name = ? WHERE id = ?';

  db.query(query, [name, id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'Gagal update kategori',
        error: err
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Kategori tidak ditemukan'
      });
    }

    res.status(200).json({
      message: 'Kategori berhasil diupdate',
      data: {
        id,
        name
      }
    });
  });
};

//delete
exports.deleteCategory = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM categories WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'Gagal menghapus kategori',
        error: err
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Kategori tidak ditemukan'
      });
    }

    res.status(200).json({
      message: 'Kategori berhasil dihapus'
    });
  });
};
