const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let articleSchema = new Schema({
  title: {type: String, unique: true, required: true},
  details: {type: String},
  slug: {type: String}
}, {
  timestamps: true
})

module.exports = mongoose.model('Article', articleSchema)
