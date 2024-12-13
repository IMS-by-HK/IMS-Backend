const mongoose = require('mongoose');

// Make Schema
const ProductSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
        // unique: true
      },
      // Makes price become currency value minimum "00.00"
      price: {
        type: Number,
        required: true,
        min: 0,
        validate: {
          // Validator to ensure price has at most 2 decimal places
          validator: function (value) {
            return /^\d+(\.\d{1,2})?$/.test(value.toString());
          },
          message: 'Price must be a positive number with up to two decimal places.',
        },
      },
      quantity: {
        type: Number,
        required: true,
        min: 0,
      },
      category: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    });

// Make model based on schema
const ProductModel = mongoose.model('Product', ProductSchema);

// Export the model for the rest of our code to use
module.exports = {
	ProductModel
}