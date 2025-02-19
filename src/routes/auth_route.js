const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/guest', authController.login);

module.exports = router;