'use strict';

module.exports = function(app) {
    var product = require('../controllers/descriptionController');
    app.route('/description')
        .get(product.products)
        .post(product.add);
    app.route('/description/:descriptionId')
        .get(product.getproduct)
        .put(product.update)
        .delete(product.delete);
};