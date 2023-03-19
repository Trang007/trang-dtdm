const mongoose = require('mongoose');

const CategoryModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên danh mục"],
    },
}, {
    timestamps: true,
});

const CategoryModel = mongoose.model('Category', CategoryModelSchema)

module.exports = CategoryModel