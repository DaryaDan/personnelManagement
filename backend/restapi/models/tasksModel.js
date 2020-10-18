'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Tasks = new Schema({

  manID: { type: Number, Required:  'Product name cannot be left blank.' },

  taskID: { type: Number, Required:  'Product name cannot be left blank.' },

  taskName: { type: String ,    Required:  'Product category cannot be left blank'},

  description: { type: String, Required:  'Product name cannot be left blank.' },

  term: { type: String, Required:  'Product name cannot be left blank.' }, //срок

  subtasks: { type: Array,     Required:  'Product price cannot be left blank.'},

  type: { type: String,     Required:  'Product price cannot be left blank.'} //новая, в процессе, сделано

});

module.exports = mongoose.model('Tasks', Tasks);
