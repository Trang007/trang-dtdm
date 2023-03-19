const express = require("express");
const {
    getAllNotifys,
    createNotify,
    updateNotify,
    deleteNotify,
    getNotify
} = require("../controller/NotifyController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/notify").get(getAllNotifys);

router
    .route("/notify/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createNotify);

router
    .route("/notify/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateNotify)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteNotify)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getNotify)

module.exports = router;
