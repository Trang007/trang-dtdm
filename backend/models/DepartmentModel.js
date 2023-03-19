const mongoose = require('mongoose');

const DepartmentModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên khoa"],
    },
}, {
    timestamps: true,
});

const DepartmentModel = mongoose.model('Department', DepartmentModelSchema)

module.exports = DepartmentModel