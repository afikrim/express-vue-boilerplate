const express = require('express');

const homeController = require('../src/controllers/home');

const router = express.Router();

router.get('/', homeController.index);

module.exports = router;
