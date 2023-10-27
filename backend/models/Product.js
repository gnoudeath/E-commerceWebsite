const mongoose = require('mongoose');

// Định nghĩa schema cho sản phẩm
const productSchema = new mongoose.Schema({
  brand: String,
  productTitle: String,
  rating: Number,
  description: String,
  price: Number,
  image: String,
  category: String,
});

// Tạo model dựa trên schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
