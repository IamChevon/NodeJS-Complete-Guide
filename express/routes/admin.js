const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
    console.log('add-product');    
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Add</button></form>')
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;