const Specialized = require("../models/SpecializedModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Classroom = require("../models/ClassroomModel.js");
// create Specialized --Admin
exports.createSpecialized = catchAsyncErrors(async (req, res, next) => {

    const specialized = await Specialized.create(req.body);

    res.status(201).json({
        success: true,
        specialized,
    });
});

// Get All Specialized
exports.getAllSpecializeds = catchAsyncErrors(async (req, res, next) => {
    const specializeds = await Specialized.find();

    res.status(200).json({
        success: true,
        specializeds,
    });
});

// Update Specialized ---Admin
exports.updateSpecialized = catchAsyncErrors(async (req, res, next) => {
    let specialized = await Specialized.findById(req.params.id);
    if (!specialized) {
        return next(new ErrorHandler("Không tìm thấy chuyên ngành ", 404));
    }

    specialized = await Specialized.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        specialized,
    });
});

// delete Specialized
exports.deleteSpecialized = catchAsyncErrors(async (req, res, next) => {
    const specialized = await Specialized.findById(req.params.id);
    if (!specialized) {
        return next(new ErrorHandler("Không tìm thấy chuyên ngành ", 404));
    }
    const classroom = await Classroom.findOne({ category: req.params.id });
    if (classroom) {
        return next(new ErrorHandler("Xóa tất cả đồ án của danh mục", 404));
    }
    await specialized.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa chuyên ngành thành công",
    });
});

// single Specialized details
exports.getSpecialized = catchAsyncErrors(async (req, res, next) => {
    const specialized = await Specialized.findById(req.params.id);
    if (!specialized) {
        return next(new ErrorHandler("Không tìm thấy chuyên ngành ", 404));
    }
    res.status(200).json({
        success: true,
        specialized,
    });
});

