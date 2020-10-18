'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Description = new Schema({

  descriptionID: { type: Number, Required:  'Product name cannot be left blank.' },

  phone: { type: String,     Required:  'Product price cannot be left blank.'},

  img: { type: String,     Required:  'Product price cannot be left blank.'},

  birthday: { type: Date ,    Required:  'Product category cannot be left blank'},

  position: { type: String,     Required:  'Product price cannot be left blank.'}

});

module.exports = mongoose.model('Description', Description);
