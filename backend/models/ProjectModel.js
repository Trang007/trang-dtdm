const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Vui lòng nhập tên đồ án"],
        trim: true,
        maxLength: [20, "Tên đồ án không quá 20 ký tự"],
    },
    description: {
        type: String,
        required: [true, "Vui lòng thêm mô tả về đồ án của bạn"],
        maxlength: [4000, "Mô tả không được vượt quá 4000 ký tự"]
    },


    ratings: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        }
    ],
    category: {
        type: String,
        required: [true, "Vui lòng thêm danh mục đồ án của bạn"],
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
            },
            time: {
                type: Date,
                default: Date.now()
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        //   required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Project", projectSchema);