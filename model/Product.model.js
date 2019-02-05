var mongoose = require("mongoose");

var Product = mongoose.model("Product", {
  model: { type: String, required: true, minlength: 3 },
  brand: { type: String, required: true, minlength: 3 },
  inStock: { type: Boolean, default: true },
  price: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now() }
});

module.exports = Product;
