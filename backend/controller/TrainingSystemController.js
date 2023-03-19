const TrainingSystem = require("../models/TrainingSystemModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create TrainingSystem --Admin
exports.createTrainingSystem = catchAsyncErrors(async (req, res, next) => {

    const trainingsystem = await TrainingSystem.create(req.body);

    res.status(201).json({
        success: true,
        trainingsystem,
    });
});

// Get All TrainingSystem
exports.getAllTrainingSystems = catchAsyncErrors(async (req, res, next) => {
    const trainingsystems = await TrainingSystem.find();

    res.status(200).json({
        success: true,
        trainingsystems,
    });
});

// Update TrainingSystem ---Admin
exports.updateTrainingSystem = catchAsyncErrors(async (req, res, next) => {
    let trainingsystem = await TrainingSystem.findById(req.params.id);
    if (!trainingsystem) {
        return next(new ErrorHandler("Không tìm thấy hệ đào tạo ", 404));
    }

    trainingsystem = await TrainingSystem.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        trainingsystem,
    });
});

// delete TrainingSystem
exports.deleteTrainingSystem = catchAsyncErrors(async (req, res, next) => {
    const trainingsystem = await TrainingSystem.findById(req.params.id);
    if (!trainingsystem) {
        return next(new ErrorHandler("Không tìm thấy hệ đào tạo ", 404));
    }
    await trainingsystem.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa hệ đào tạo thành công",
    });
});

// single TrainingSystem details
exports.getTrainingSystem = catchAsyncErrors(async (req, res, next) => {
    const trainingsystem = await TrainingSystem.findById(req.params.id);
    if (!trainingsystem) {
        return next(new ErrorHandler("Không tìm thấy hệ đào tạo ", 404));
    }
    res.status(200).json({
        success: true,
        trainingsystem,
    });
});

