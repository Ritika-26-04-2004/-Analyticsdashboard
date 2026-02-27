const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  productName: String,
  category: String,
  quantity: Number,
  price: Number,
  totalAmount: Number,
  status: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Sale", saleSchema);