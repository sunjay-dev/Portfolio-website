const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controllers.js');

router.post('/email', emailController.SendEmailToMe);

module.exports = router