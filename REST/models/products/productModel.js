const Product = require('./productSchema');


exports.createProduct = (req, res) => {
    Product.exists({ name: req.body.namn }, (err, result) => {

        if(err) {
            return res.status(500).json(err)
        }

        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'A product by that name alreade exists, please updtade product instead'
            })
        }

        
        Product.create({
            name:   req.body.name,
            desc:   req.body.desc,
            price:  req.body.price,
            image:  req.body.image,
        })

        .then(data => {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'Product created successfully',
                data
            })

        })
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'failed to create prudct',
                err 
            })
        })
    })
}

