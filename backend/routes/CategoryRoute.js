const express = require("express");
const {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory
} = require("../controller/CategoryController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/category").get(getAllCategories);

router
    .route("/category/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createCategory);

router
    .route("/category/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateCategory)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCategory)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getCategory)

module.exports = router;
