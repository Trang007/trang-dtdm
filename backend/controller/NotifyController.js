const Notify = require("../models/NotifyModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create Notify --Admin
exports.createNotify = catchAsyncErrors(async (req, res, next) => {

    const notify = await Notify.create(req.body);

    res.status(201).json({
        success: true,
        notify,
    });
});

// Get All Notify
exports.getAllNotifys = catchAsyncErrors(async (req, res, next) => {
    const notifys = await Notify.find();

    res.status(200).json({
        success: true,
        notifys,
    });
});

// Update Notify ---Admin
exports.updateNotify = catchAsyncErrors(async (req, res, next) => {
    let notify = await Notify.findById(req.params.id);
    if (!notify) {
        return next(new ErrorHandler("Không tìm thấy thông báo ", 404));
    }

    notify = await Notify.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        notify,
    });
});

// delete Notify
exports.deleteNotify = catchAsyncErrors(async (req, res, next) => {
    const notify = await Notify.findById(req.params.id);
    if (!notify) {
        return next(new ErrorHandler("Không tìm thấy thông báo ", 404));
    }
    await notify.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa thông báo thành công",
    });
});

// single Notify details
exports.getNotify = catchAsyncErrors(async (req, res, next) => {
    const notify = await Notify.findById(req.params.id);
    if (!notify) {
        return next(new ErrorHandler("Không tìm thấy thông báo ", 404));
    }
    res.status(200).json({
        success: true,
        notify,
    });
});

