'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Correspond = new Schema({

  correspondID: { type: Number, Required:  'Product name cannot be left blank.' },

  fullName: { type: String, Required:  'Product name cannot be left blank.' },

  mail: { type: String, Required:  'Product name cannot be left blank.' }

});

module.exports = mongoose.model('Correspond', Correspond);
