const express = require("express");
const {
    getAllClassrooms,
    createClassroom,
    updateClassroom,
    deleteClassroom,
    getClassroom
} = require("../controller/ClassroomController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/classroom").get(getAllClassrooms);

router
    .route("/classroom/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createClassroom);

router
    .route("/classroom/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateClassroom)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteClassroom)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getClassroom)

module.exports = router;
