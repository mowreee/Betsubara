const express = require('express');
const router = express.Router();
const userController = require('../controllers/customerController');

router.post('/register', userController.registerUser);
router.get('/', userController.getAllUsers);
router.put('/:id', userController.updateUser); // Update user
router.delete('/:id', userController.deleteUser); // Delete user

module.exports = router;
