const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

// CREATE
router.post('/categories', categoryController.createCategory);
// READ
router.get('/categories', categoryController.getAllCategories);
//READ BY ID
router.get('/categories/:id', categoryController.getCategoryById);
// UPDATE
router.put('/categories/:id', categoryController.updateCategory);
// DELETE
router.delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;
