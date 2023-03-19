const Faq = require("../models/FaqModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create Faq --Admin
exports.createFaq = catchAsyncErrors(async (req, res, next) => {

    const faq = await Faq.create(req.body);

    res.status(201).json({
        success: true,
        faq,
    });
});

// Get All Faq
exports.getAllFaqs = catchAsyncErrors(async (req, res, next) => {
    const faqs = await Faq.find();

    res.status(200).json({
        success: true,
        faqs,
    });
});

// Update Faq ---Admin
exports.updateFaq = catchAsyncErrors(async (req, res, next) => {
    let faq = await Faq.findById(req.params.id);
    if (!faq) {
        return next(new ErrorHandler("Không tìm thấy hỗ trợ ", 404));
    }

    faq = await Faq.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        faq,
    });
});

// delete Faq
exports.deleteFaq = catchAsyncErrors(async (req, res, next) => {
    const faq = await Faq.findById(req.params.id);
    if (!faq) {
        return next(new ErrorHandler("Không tìm thấy hỗ trợ ", 404));
    }
    await faq.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa hỗ trợ thành công",
    });
});

// single Faq details
exports.getFaq = catchAsyncErrors(async (req, res, next) => {
    const faq = await Faq.findById(req.params.id);
    if (!faq) {
        return next(new ErrorHandler("Không tìm thấy hỗ trợ ", 404));
    }
    res.status(200).json({
        success: true,
        faq,
    });
});

