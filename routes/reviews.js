const { Router } = require("express");
const { protect, authorize } = require("../middleware/auth");

const {
  getReviews,
  getReview,
  createReview,
} = require("../controllers/reviews");

const Review = require("../models/Review");
const advancedResults = require("../middleware/advancedResults");

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(advancedResults(Review), getReviews)
  .post(protect, authorize("user", "admin"), createReview);

router.route("/:id").get(getReview);

module.exports = router;
