const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { signup, login, forgotPassword } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

module.exports = router;
