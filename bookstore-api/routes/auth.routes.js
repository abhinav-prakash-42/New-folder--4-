const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller'); // Ensure this path is correct

// Define routes
router.post('/signup', authController.signup); // Ensure `signup` is defined in `auth.controller.js`
router.post('/login', authController.login);   // Ensure `login` is defined in `auth.controller.js`

module.exports = router; // Correctly export the router
