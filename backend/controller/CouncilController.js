const Council = require("../models/CouncilModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create Council --Admin
exports.createCouncil = catchAsyncErrors(async (req, res, next) => {

    const council = await Council.create(req.body);

    res.status(201).json({
        success: true,
        council,
    });
});

// Get All Council
exports.getAllCouncils = catchAsyncErrors(async (req, res, next) => {
    const councils = await Council.find();

    res.status(200).json({
        success: true,
        councils,
    });
});

// Update Council ---Admin
exports.updateCouncil = catchAsyncErrors(async (req, res, next) => {
    let council = await Council.findById(req.params.id);
    if (!council) {
        return next(new ErrorHandler("Không tìm thấy hội đồng", 404));
    }

    council = await Council.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        council,
    });
});

// delete Council
exports.deleteCouncil = catchAsyncErrors(async (req, res, next) => {
    const council = await Council.findById(req.params.id);
    if (!council) {
        return next(new ErrorHandler("Không tìm thấy hội đồng", 404));
    }
    await council.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa hội đồngthành công",
    });
});

// single Council details
exports.getCouncil = catchAsyncErrors(async (req, res, next) => {
    const council = await Council.findById(req.params.id);
    if (!council) {
        return next(new ErrorHandler("Không tìm thấy hội đồng", 404));
    }
    res.status(200).json({
        success: true,
        council,
    });
});

