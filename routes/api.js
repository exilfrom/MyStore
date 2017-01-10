var express = require('express');
var router = express.Router();

router.use('/categories', require('./api/categories-routes'));
router.use('/products', require('./api/products-routes'));

module.exports = router;
