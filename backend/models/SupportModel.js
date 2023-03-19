const mongoose = require('mongoose');

const SupportModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên hỗ trợ"],
    },
}, {
    timestamps: true,
});

const SupportModel = mongoose.model('Support', SupportModelSchema)

module.exports = SupportModel