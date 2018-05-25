const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    text: String,
    author: String,
    category: String
})

module.exports = mongoose.model('Quote', quoteSchema);