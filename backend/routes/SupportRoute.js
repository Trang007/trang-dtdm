const express = require("express");
const {
    getAllSupports,
    createSupport,
    updateSupport,
    deleteSupport,
    getSupport
} = require("../controller/SupportController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/support").get(getAllSupports);

router
    .route("/support/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createSupport);

router
    .route("/support/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateSupport)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteSupport)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getSupport)

module.exports = router;
