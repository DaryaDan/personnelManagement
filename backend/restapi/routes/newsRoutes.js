'use strict';

module.exports = function(app) {
    var product = require('../controllers/newsController');
    app.route('/news')
        .get(product.products) //получить все
        .post(product.add); // добавить 1
    app.route('/news/:newsId')
        .get(product.getproduct) //получить 1
        .put(product.update) // обновить 1
        .delete(product.delete);  //удалить 1
};
