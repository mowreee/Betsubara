const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/', menuController.getAllMenuItems);
router.post('/', menuController.createMenuItem);
router.put('/:id', menuController.updateMenuItem); // Update menu item
router.delete('/:id', menuController.deleteMenuItem); // Delete menu item

module.exports = router;