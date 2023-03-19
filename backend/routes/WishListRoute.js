const express = require("express");
const {
  addToWishlist,
  getWishlistData,
  removeWishlistData,

} = require("../controller/WishlistController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/wishlist").get(isAuthenticatedUser, getWishlistData);

router.route("/addToWishlist").post(isAuthenticatedUser, addToWishlist);

router
  .route("/removeWishlist/:id")
  .delete(isAuthenticatedUser, removeWishlistData);

module.exports = router;
