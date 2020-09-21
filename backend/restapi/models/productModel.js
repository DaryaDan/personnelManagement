'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({

  personID: { type: Number, Required:  'Product name cannot be left blank.' },

  fullName: { type: String, Required:  'Product name cannot be left blank.' },

  email: { type: String, Required:  'Product name cannot be left blank.' },

  phone: { type: String,     Required:  'Product price cannot be left blank.'},

  img: { type: String,     Required:  'Product price cannot be left blank.'},

  birthday: { type: Date ,    Required:  'Product category cannot be left blank'},

  position: { type: String,     Required:  'Product price cannot be left blank.'},

  roots: { type: Boolean ,    Required:  'Product category cannot be left blank'},

  password: { type: String ,    Required:  'Product category cannot be left blank'},

  affairs: { type: Array ,    Required:  'Product category cannot be left blank'}

});

module.exports = mongoose.model('Products', Schema);
