const express = require('express');
const app = express();

const productController = require('./controllers/productController');


// Middleware



// Controllers
app.use('/api/products', productController);




module.exports = app