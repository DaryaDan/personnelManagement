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
  Description.find({articul: req.query.articul}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.update = function(req, res) {
  var articul = req.query.articul;
  Description.findOneAndUpdate({articul: articul}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.delete = function(req, res) {
  var articul = req.query.articul;
  Description.remove({
    articul: articul
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product deleted successfully' });
  });
};
