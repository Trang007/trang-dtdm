const Support = require("../models/SupportModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create Support --Admin
exports.createSupport = catchAsyncErrors(async (req, res, next) => {

    const support = await Support.create(req.body);

    res.status(201).json({
        success: true,
        support,
    });
});

// Get All Support
exports.getAllSupports = catchAsyncErrors(async (req, res, next) => {
    const supports = await Support.find();

    res.status(200).json({
        success: true,
        supports,
    });
});

// Update Support ---Admin
exports.updateSupport = catchAsyncErrors(async (req, res, next) => {
    let support = await Support.findById(req.params.id);
    if (!support) {
        return next(new ErrorHandler("Không tìm thấy hỗ trợ ", 404));
    }

    support = await Support.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        support,
    });
});

// delete Support
exports.deleteSupport = catchAsyncErrors(async (req, res, next) => {
    const support = await Support.findById(req.params.id);
    if (!support) {
        return next(new ErrorHandler("Không tìm thấy hỗ trợ ", 404));
    }
    await support.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa hỗ trợ thành công",
    });
});

// single Support details
exports.getSupport = catchAsyncErrors(async (req, res, next) => {
    const support = await Support.findById(req.params.id);
    if (!support) {
        return next(new ErrorHandler("Không tìm thấy hỗ trợ ", 404));
    }
    res.status(200).json({
        success: true,
        support,
    });
});

