const express = require("express");
const {
    getAllDepartments,
    createDepartment,
    updateDepartment,
    deleteDepartment,
    getDepartment
} = require("../controller/DepartmentController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/department").get(getAllDepartments);

router
    .route("/department/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createDepartment);

router
    .route("/department/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateDepartment)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteDepartment)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getDepartment)

module.exports = router;
