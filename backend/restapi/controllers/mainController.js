'use strict';

var mongoose = require('mongoose'),
    Main = mongoose.model('Main');

exports.products = function(req, res) {
    Main.find({}, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.add = function(req, res) {
    var new_product = new Main(req.body);
    new_product.save(function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.getproduct = function(req, res) {
    Main.find({ personID: req.query.personID }, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.update = function(req, res) {
    var personID = req.query.personID;
    Main.findOneAndUpdate({ personID: personID }, req.body, { new: true }, function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};

exports.delete = function(req, res) {
    var personID = req.query.personID;
    Main.remove({
        personID: personID
    }, function(err, product) {
        if (err)
            res.send(err);
        res.json({ message: 'Product deleted successfully' });
    });
};