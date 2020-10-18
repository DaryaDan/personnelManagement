'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Main = new Schema({

  personID: { type: Number, Required:  'Product name cannot be left blank.' },

  fullName: { type: String, Required:  'Product name cannot be left blank.' },

  email: { type: String, Required:  'Product name cannot be left blank.' },

  roots: { type: Boolean ,    Required:  'Product category cannot be left blank'},

  password: { type: String ,    Required:  'Product category cannot be left blank'}

});

module.exports = mongoose.model('Main', Main);
