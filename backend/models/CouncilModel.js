const mongoose = require('mongoose');

const CouncilModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên hội đồng"],
    },
}, {
    timestamps: true,
});

const CouncilModel = mongoose.model('Council', CouncilModelSchema)

module.exports = CouncilModel