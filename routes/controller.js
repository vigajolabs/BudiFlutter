const config = require('../config');
const express = require('express');
const router = express.Router();

router.get('/users', function (req, res) {
    res.send('Usuarios');
});

module.exports = router;