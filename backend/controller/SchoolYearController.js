const SchoolYear = require("../models/SchoolYearModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create SchoolYear --Admin
exports.createSchoolYear = catchAsyncErrors(async (req, res, next) => {

    const schoolyear = await SchoolYear.create(req.body);

    res.status(201).json({
        success: true,
        schoolyear,
    });
});

// Get All SchoolYear
exports.getAllSchoolYears = catchAsyncErrors(async (req, res, next) => {
    const schoolyears = await SchoolYear.find();

    res.status(200).json({
        success: true,
        schoolyears,
    });
});

// Update SchoolYear ---Admin
exports.updateSchoolYear = catchAsyncErrors(async (req, res, next) => {
    let schoolyear = await SchoolYear.findById(req.params.id);
    if (!schoolyear) {
        return next(new ErrorHandler("Không tìm thấy niên khóa ", 404));
    }

    schoolyear = await SchoolYear.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        schoolyear,
    });
});

// delete SchoolYear
exports.deleteSchoolYear = catchAsyncErrors(async (req, res, next) => {
    const schoolyear = await SchoolYear.findById(req.params.id);
    if (!schoolyear) {
        return next(new ErrorHandler("Không tìm thấy niên khóa ", 404));
    }
    await schoolyear.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa niên khóa thành công",
    });
});

// single SchoolYear details
exports.getSchoolYear = catchAsyncErrors(async (req, res, next) => {
    const schoolyear = await SchoolYear.findById(req.params.id);
    if (!schoolyear) {
        return next(new ErrorHandler("Không tìm thấy niên khóa ", 404));
    }
    res.status(200).json({
        success: true,
        schoolyear,
    });
});

