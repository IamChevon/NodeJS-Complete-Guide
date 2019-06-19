const express = require('express');

const bodyParser = require('body-parser');
const app = express();

/* 1. handling routes/paths
   2. Parsing request body
   3. Limit middleware execution to request type
*/

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    console.log('add-product');    
    res.send('<form action="product" method="POST"><input type="text" name="title"/><button type="submit">Add</button></form>')
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

app.use('/', (req, res, next) => {
    console.log('first middleware');    
    res.send('<p>Hello from home!</p>')
});

app.listen(3000);
