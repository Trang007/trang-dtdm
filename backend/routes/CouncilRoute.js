const express = require("express");
const {
    getAllCouncils,
    createCouncil,
    updateCouncil,
    deleteCouncil,
    getCouncil
} = require("../controller/CouncilController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/council").get(getAllCouncils);

router
    .route("/council/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createCouncil);

router
    .route("/council/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateCouncil)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCouncil)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getCouncil)

module.exports = router;
