'use strict';

var mongoose = require('mongoose'),
    News = mongoose.model('News');

exports.products = function(req, res) {
    News.find({}, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.add = function(req, res) {
    var new_product = new News(req.body);
    new_product.save(function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.getproduct = function(req, res) {
    News.find({ taskID: req.query.taskID }, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.update = function(req, res) {
    var taskID = req.query.taskID;
    News.findOneAndUpdate({ taskID: taskID }, req.body, { new: true }, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.delete = function(req, res) {
    var taskID = req.query.taskID;
    News.remove({
        taskID: taskID
    }, function(err, product) {
        if (err)
            res.send(err);
        res.json({ message: 'Product deleted successfully' });
    });
};