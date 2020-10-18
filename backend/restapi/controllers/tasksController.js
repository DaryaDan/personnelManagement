'use strict';

var mongoose = require('mongoose'),
    Tasks = mongoose.model('Tasks');

exports.products = function(req, res) {
  Tasks.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.add = function(req, res) {
  var new_product = new Tasks(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.getproduct = function(req, res) {
  Tasks.find({articul: req.query.articul}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.update = function(req, res) {
  var articul = req.query.articul;
  Tasks.findOneAndUpdate({articul: articul}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.delete = function(req, res) {
  var articul = req.query.articul;
  Tasks.remove({
    articul: articul
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product deleted successfully' });
  });
};
