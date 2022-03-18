const router = require('express').Router();
const productModel = require('../models/products/productModel');

//Få alla produkter
router.get('/', productModel.getProducts);


// Få en produkt via ID
router.get('/:id', productModel.getProductsById);

// //Skapa en ny produkt
router.post('/', productModel.createProduct);

// //Uppdatera product
// router.patch('/:id')

// //Radera en produkt
router.delete('/:id', productModel.deleteProduct);


module.exports = router;