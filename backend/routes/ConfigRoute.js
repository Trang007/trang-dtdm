const express = require("express");
const {
    getAllConfigs,
    createConfig,
    updateConfig,
    deleteConfig,
    getConfig
} = require("../controller/ConfigController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/config").get(getAllConfigs);

router
    .route("/config/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createConfig);

router
    .route("/config/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateConfig)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteConfig)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getConfig)

module.exports = router;
