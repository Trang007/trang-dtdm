const Category = require("../models/CategoryModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Project = require("../models/ProjectModel.js");
// create Category --Admin
exports.createCategory = catchAsyncErrors(async (req, res, next) => {

    const category = await Category.create(req.body);

    res.status(201).json({
        success: true,
        category,
    });
});

// Get All Category
exports.getAllCategories = catchAsyncErrors(async (req, res, next) => {
    const categories = await Category.find();

    res.status(200).json({
        success: true,
        categories,
    });
});

// Update Category ---Admin
exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
    let category = await Category.findById(req.params.id);
    if (!category) {
        return next(new ErrorHandler("Không tìm thấy danh mục ", 404));
    }

    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useUnified: false,
    });
    res.status(200).json({
        success: true,
        category,
    });
});

// delete Category
exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    const project = await Project.findOne({ category: req.params.id });
    if (project) {
        return next(new ErrorHandler("Xóa tất cả đồ án của danh mục", 404));
      }
    if (!category) {
        return next(new ErrorHandler("Không tìm thấy danh mục ", 404));
    }
    await category.remove();
    res.status(200).json({
        success: true,
        message: "Đã xóa danh mục thành công",
    });
});

// single Category details
exports.getCategory = catchAsyncErrors(async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return next(new ErrorHandler("Không tìm thấy danh mục ", 404));
    }
    res.status(200).json({
        success: true,
        category,
    });
});

