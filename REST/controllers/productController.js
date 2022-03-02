const router = require('express').Router();
const productModel = require('../models/products/productModel');

// // Få alla produkter
// router.get('/',)

// // Få en produkt via ID
// router.get('/:id')

// //Skapa en ny produkt
router.post('/', productModel.createProduct);

// //Uppdatera product
// router.patch('/:id')

// //Radera en produkt
// router.delete('/:id')


module.exports = router;