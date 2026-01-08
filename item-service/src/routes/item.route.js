const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

//CREATE
router.post('/items', itemController.createItem);
//READ
router.get('/items', itemController.getAllItems);
//UPDATE
router.put('/items/:id', itemController.updateItem);
//DELETE
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
