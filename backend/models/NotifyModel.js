const mongoose = require('mongoose');

const NotifyModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên thông báo"],
    },
}, {
    timestamps: true,
});

const NotifyModel = mongoose.model('Notify', NotifyModelSchema)

module.exports = NotifyModel