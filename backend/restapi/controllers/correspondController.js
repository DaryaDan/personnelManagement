'use strict';

var mongoose = require('mongoose'),
    Correspond = mongoose.model('Correspond');

exports.products = function(req, res) {
    Correspond.find({}, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.add = function(req, res) {
    var new_product = new Correspond(req.body);
    new_product.save(function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.getproduct = function(req, res) {
    Correspond.find({ correspondID: req.query.correspondID }, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.update = function(req, res) {
    var correspondID = req.query.correspondID;
    Correspond.findOneAndUpdate({ correspondID: correspondID }, req.body, { new: true }, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.delete = function(req, res) {
    var correspondID = req.query.correspondID;
    Correspond.remove({
        correspondID: correspondID
    }, function(err, product) {
        if (err)
            res.send(err);
        res.json({ message: 'Product deleted successfully' });
    });
};