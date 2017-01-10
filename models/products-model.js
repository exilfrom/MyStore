var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Product name is required']},
    price: {type: Number, required: [true, 'Price is required']},
    categoryId: {type: Schema.Types.ObjectId, ref: 'categories'}
},{versionKey: false }, {collection: 'products'});

module.exports = mongoose.model('Products', ProductSchema);
