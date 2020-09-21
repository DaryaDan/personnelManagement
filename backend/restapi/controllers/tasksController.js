'use strict';

var mongoose = require('mongoose'),
    Product1 = mongoose.model('Products1');

exports.products = function(req, res) {
  Product1.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.add = function(req, res) {
  var new_product = new Product1(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.getproduct = function(req, res) {
  Product1.find({articul: req.query.articul}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.update = function(req, res) {
  var articul = req.query.articul;
  Product1.findOneAndUpdate({articul: articul}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.delete = function(req, res) {
  var articul = req.query.articul;
  Product1.remove({
    articul: articul
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product deleted successfully' });
  });
};
