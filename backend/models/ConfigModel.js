const mongoose = require('mongoose');

const ConfigModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên ngành"],
    },
}, {
    timestamps: true,
});

const ConfigModel = mongoose.model('Config', ConfigModelSchema)

module.exports = ConfigModel