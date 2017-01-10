var express = require('express');
var router = express.Router();
var CategoryModel = require('../../models/categories-model');
var ProductModel = require('../../models/products-model');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

router.get('/', function (req, res, next) {
    CategoryModel.find({}, function(err, categories){
        if(err) return next(err);
        res.json(categories);
    });
})

router.get('/:categoryName', function (req, res, next) {
    var categoryName = req.params.categoryName;

    CategoryModel.findOne({'name': { $regex : new RegExp(categoryName, "i") }}, function (err, category) {
        if(err) return next(err);
        //console.log(categoryName, category[0]._id);
        if(category != null) {
            ProductModel.find({'categoryId': ObjectId(category._id)}, function (err, products) {
                if (err) return next(err);
                res.json(products);
            });
        }else{
            res.json("not found");
        }
    })
})

module.exports = router;