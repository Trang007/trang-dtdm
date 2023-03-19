const express = require("express");
const {
    getAllTrainingSystems,
    createTrainingSystem,
    updateTrainingSystem,
    deleteTrainingSystem,
    getTrainingSystem
} = require("../controller/TrainingSystemController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/trainingsystem").get(getAllTrainingSystems);

router
    .route("/trainingsystem/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createTrainingSystem);

router
    .route("/trainingsystem/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateTrainingSystem)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteTrainingSystem)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getTrainingSystem)

module.exports = router;
