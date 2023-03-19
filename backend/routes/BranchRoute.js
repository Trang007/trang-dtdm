const express = require("express");
const {
    getAllBranchs,
    createBranch,
    updateBranch,
    deleteBranch,
    getBranch
} = require("../controller/BranchController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/branch").get(getAllBranchs);

router
    .route("/branch/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createBranch);

router
    .route("/branch/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateBranch)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteBranch)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getBranch)

module.exports = router;
