const Classroom = require("../models/ClassroomModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create Classroom --Admin
exports.createClassroom = catchAsyncErrors(async (req, res, next) => {

    const classroom = await Classroom.create(req.body);

    res.status(201).json({
        success: true,
        classroom,
    });
});

// Get All Classroom
exports.getAllClassrooms = catchAsyncErrors(async (req, res, next) => {
    const classrooms = await Classroom.find();

    res.status(200).json({
        success: true,
        classrooms,
    });
});

// Update Classroom ---Admin
exports.updateClassroom = catchAsyncErrors(async (req, res, next) => {
    let classroom = await Classroom.findById(req.params.id);
    if (!classroom) {
        return next(new ErrorHandler("Không tìm thấy lớp ", 404));
    }

    classroom = await Classroom.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        classroom,
    });
});

// delete Classroom
exports.deleteClassroom = catchAsyncErrors(async (req, res, next) => {
    const classroom = await Classroom.findById(req.params.id);
    if (!classroom) {
        return next(new ErrorHandler("Không tìm thấy lớp ", 404));
    }
    await classroom.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa lớp thành công",
    });
});

// single Classroom details
exports.getClassroom = catchAsyncErrors(async (req, res, next) => {
    const classroom = await Classroom.findById(req.params.id);
    if (!classroom) {
        return next(new ErrorHandler("Không tìm thấy lớp ", 404));
    }
    res.status(200).json({
        success: true,
        classroom,
    });
});

