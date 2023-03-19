const Config = require("../models/ConfigModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create Config --Admin
exports.createConfig = catchAsyncErrors(async (req, res, next) => {

    const config = await Config.create(req.body);

    res.status(201).json({
        success: true,
        config,
    });
});

// Get All Config
exports.getAllConfigs = catchAsyncErrors(async (req, res, next) => {
    const configs = await Config.find();

    res.status(200).json({
        success: true,
        configs,
    });
});

// Update Config ---Admin
exports.updateConfig = catchAsyncErrors(async (req, res, next) => {
    let config = await Config.findById(req.params.id);
    if (!config) {
        return next(new ErrorHandler("Không tìm thấy liên kết ", 404));
    }

    config = await Config.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        config,
    });
});

// delete Config
exports.deleteConfig = catchAsyncErrors(async (req, res, next) => {
    const config = await Config.findById(req.params.id);
    if (!config) {
        return next(new ErrorHandler("Không tìm thấy liên kết ", 404));
    }
    await config.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa liên kết thành công",
    });
});

// single Config details
exports.getConfig = catchAsyncErrors(async (req, res, next) => {
    const config = await Config.findById(req.params.id);
    if (!config) {
        return next(new ErrorHandler("Không tìm thấy liên kết ", 404));
    }
    res.status(200).json({
        success: true,
        config,
    });
});

