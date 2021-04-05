'use strict';

module.exports = function(app) {
    var product = require('../controllers/correspondController');
    app.route('/correspond')
        .get(product.products)
        .post(product.add);
    app.route('/correspond/:correspondId')
        .get(product.getproduct)
        .put(product.update)
        .delete(product.delete);
};