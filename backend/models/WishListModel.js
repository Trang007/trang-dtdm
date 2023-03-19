const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, "Vui lòng nhập tên đồ án"],
  },
  projectPrice: {
    type: Number,
    required: [true, "Vui lòng nhập giá đồ án"],
  },
  projectImage: {
    type: String,
    required: [true, "Vui lòng nhập ảnh đồ án"],
  },
  quantity: {
    type: Number,
    required: [true, "Vui lòng nhập số lượng đồ án"],
  },
  userId: {
    type: String,
    required: [true, "Vui lòng nhập id người dùng"],
  },
  projectId: {
    type: String,
    required: [true, "Vui lòng nhập id đồ án"],
  },
});

module.exports = mongoose.model("Wishlist", wishListSchema);
