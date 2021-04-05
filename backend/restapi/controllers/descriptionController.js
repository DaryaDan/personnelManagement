'use strict';

var mongoose = require('mongoose'),
    Description = mongoose.model('Description');

exports.products = function(req, res) {
    Description.find({}, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.add = function(req, res) {
    var new_product = new Description(req.body);
    new_product.save(function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.getproduct = function(req, res) {
    Description.find({ descriptionID: req.query.descriptionID }, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.update = function(req, res) {
    var descriptionID = req.query.descriptionID;
    Description.findOneAndUpdate({ descriptionID: descriptionID }, req.body, { new: true }, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.delete = function(req, res) {
    var descriptionID = req.query.descriptionID;
    Description.remove({
        descriptionID: descriptionID
    }, function(err, product) {
        if (err)
            res.send(err);
        res.json({ message: 'Product deleted successfully' });
    });
};