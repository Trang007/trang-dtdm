const express = require("express");
const {
    getAllFaqs,
    createFaq,
    updateFaq,
    deleteFaq,
    getFaq
} = require("../controller/FaqController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/faq").get(getAllFaqs);

router
    .route("/faq/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createFaq);

router
    .route("/faq/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateFaq)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteFaq)
    .get(isAuthenticatedUser, authorizeRoles("admin"), getFaq)

module.exports = router;
