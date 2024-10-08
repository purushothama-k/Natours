const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
    maxlength: [40, 'A tour name must have less or equal than 40 characters '],
    minlength: [10, 'A tour name must have more or equal than 10 characters ']
    // validate: [validator.isAlpha, 'A tour name must contain characters']
  },

  slug: String,

  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },

  duration: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },

  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size']
  },

  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either: easy, medium or difficult.'
    }
  },

  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0']
  },

  ratingsQuantity: {
    type: Number,
    default: 0
  },

  priceDiscount: {
    type: Number
  },

  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a summary']
  },

  description: {
    type: String,
    trim: true
  },

  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image']
  },

  images: [String],
  startDates: [Date],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
