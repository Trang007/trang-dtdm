const mongoose = require('mongoose');

const SchoolYearModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên niên khóa"],
    },
    department: {
        type: mongoose.Schema.ObjectId,
        ref: "Department",
        required: [true, "Vui lòng chọn khoa"],
    },
}, {
    timestamps: true,
});

const SchoolYearModel = mongoose.model('SchoolYear', SchoolYearModelSchema)

module.exports = SchoolYearModel