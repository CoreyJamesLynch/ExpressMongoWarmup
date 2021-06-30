const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['vegetable', 'fruit', 'dairy'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
