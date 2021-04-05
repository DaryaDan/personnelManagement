'use strict';

module.exports = function(app) {
    var product = require('../controllers/tasksController');
    app.route('/tasks')
        .get(product.products) //получить все
        .post(product.add); // добавить 1
    app.route('/tasks/:taskId')
        .get(product.getproduct) //получить 1
        .put(product.update) // обновить 1
        .delete(product.delete); //удалить 1
};