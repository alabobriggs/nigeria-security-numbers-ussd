const express = require('express');

const router = express.Router();

const { getNumbers } = require('../controllers/security-numbers');

router.get('/', (req, res) => {
  res.status(200).send('Securiity numbers in Nigeria');
});

router.post('/', getNumbers);

module.exports = router;
