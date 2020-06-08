const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/welcome', { title: process.env.APP_NAME, subtitle: 'Welcome!' });
});

module.exports = router;
