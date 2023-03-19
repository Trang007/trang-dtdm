const express = require("express");
const {
    getAllSpecializeds,
    createSpecialized,
    updateSpecialized,
    deleteSpecialized,
    getSpecialized
} = require("../controller/SpecializedController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/specialized").get(getAllSpecializeds);

router
    .route("/specialized/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createSpecialized);

router
    .route("/specialized/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateSpecialized)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteSpecialized)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getSpecialized)

module.exports = router;
