const { Router } = require("express");
const { protect, authorize } = require("../middleware/auth");

const {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviews");

const Review = require("../models/Review");
const advancedResults = require("../middleware/advancedResults");

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(advancedResults(Review), getReviews)
  .post(protect, authorize("user", "admin"), createReview);

router
  .route("/:id")
  .get(getReview)
  .put(protect, authorize("user", "admin"), updateReview)
  .delete(protect, authorize("user", "admin"), deleteReview);

module.exports = router;
