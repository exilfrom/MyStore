var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Category name is required']}
},{versionKey: false }, {collection: 'categories'});

module.exports = mongoose.model('Categories', CategorySchema);
