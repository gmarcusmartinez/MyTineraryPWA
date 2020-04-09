const { Router } = require("express");
const { protect, authorize } = require("../middleware/auth");

const { getReviews, getReview } = require("../controllers/reviews");

const Review = require("../models/Review");
const advancedResults = require("../middleware/advancedResults");

const router = Router();

router.route("/").get(advancedResults(Review), getReviews);
router.route("/:id").get(getReview);

module.exports = router;
