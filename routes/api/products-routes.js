var express = require('express');
var router = express.Router();
var ProductModel = require('../../models/products-model');

router.get('/:productId', function (req, res, next) {
    var id = req.params.productId;

    if(!isValidObjectID(id)){
        var err = new Error('ID is not valid');
        err.status = 400;
        return next(err);
    }

    ProductModel.findById(id, function(err, product){
        if(err) return next(err);
        res.json(product);
    });
})

function isValidObjectID(str) {
    return (/^[0-9a-fA-F]{24}$/).test(str);
}

module.exports = router;