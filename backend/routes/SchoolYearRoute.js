const express = require("express");
const {
    getAllSchoolYears,
    createSchoolYear,
    updateSchoolYear,
    deleteSchoolYear,
    getSchoolYear
} = require("../controller/SchoolYearController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/schoolyear").get(getAllSchoolYears);

router
    .route("/schoolyear/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createSchoolYear);

router
    .route("/schoolyear/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateSchoolYear)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteSchoolYear)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getSchoolYear)

module.exports = router;
