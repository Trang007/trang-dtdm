const mongoose = require('mongoose');

const FaqModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên hỗ trợ"],
    },
}, {
    timestamps: true,
});

const FaqModel = mongoose.model('Faq', FaqModelSchema)

module.exports = FaqModel