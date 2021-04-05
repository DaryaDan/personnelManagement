'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var News = new Schema({

    newsID: { type: Number, Required: 'Product name cannot be left blank.' },

    authorName: { type: String, Required: 'Product category cannot be left blank' },

    news: { type: String, Required: 'Product name cannot be left blank.' },

    data: { type: String, Required: 'Product name cannot be left blank.' },

    type: { type: String, Required: 'Product price cannot be left blank.' }

});

module.exports = mongoose.model('News', News);