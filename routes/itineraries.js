const { Router } = require("express");
const { protect, authorize } = require("../middleware/auth");

const {
  getItinerary,
  getItineraries,
  createItinerary,
  updateItinerary,
  deleteItinerary,
} = require("../controllers/itineraries");

const Itinerary = require("../models/Itinerary");
const advancedResults = require("../middleware/advancedResults");

const router = Router();
// Router Redirect
const reviewRouter = require("./reviews");
const activityRouter = require("./activities");
router.use("/:itineraryId/reviews", reviewRouter);
router.use("/:itineraryId/activities", activityRouter);

router
  .route("/")
  .get(advancedResults(Itinerary), getItineraries)
  .post(protect, authorize("publisher", "admin"), createItinerary);

router
  .route("/:id")
  .get(getItinerary)
  .put(protect, authorize("publisher", "admin"), updateItinerary)
  .delete(protect, authorize("publisher", "admin"), deleteItinerary);

module.exports = router;
