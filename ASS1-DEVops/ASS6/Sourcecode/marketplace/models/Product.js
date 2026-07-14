const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['car', 'bike', 'scooter', 'other'],
    required: true,
    default: 'other'
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  model: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    min: 1980,
    max: 2100
  },
  kilometersDriven: {
    type: Number,
    min: 0
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  fuelType: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { collection: 'marketplace' });

module.exports = mongoose.model('Product', productSchema);
