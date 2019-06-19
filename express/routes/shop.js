const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('first middleware');    
    res.send('<p>Hello from home!</p>')
});

module.exports = router;