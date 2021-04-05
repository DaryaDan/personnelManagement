'use strict';

module.exports = function(app) {
    var product = require('../controllers/mainController');
    app.route('/main')
        .get(product.products)
        .post(product.add);
    app.route('/main/:mainId')
        .get(product.getproduct)
        .put(product.update)
        .delete(product.delete);
};