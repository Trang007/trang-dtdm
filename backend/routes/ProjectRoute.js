const express = require("express");
const {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getSingleProject,
  createProjectReview,
  getSingleProjectReviews,
  deleteReview,
  getAdminProjects,
} = require("../controller/ProjectController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/projects").get(getAllProjects);

router
  .route("/admin/projects")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProjects);

router
  .route("/project/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProject);

router
  .route("/project/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProject)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProject)
  .get(getSingleProject);

router.route("/project/review").post(isAuthenticatedUser,
  createProjectReview
);

router
  .route("/reviews")
  .get(getSingleProjectReviews)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteReview);

module.exports = router;
