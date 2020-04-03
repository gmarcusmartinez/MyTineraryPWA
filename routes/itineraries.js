const { Router } = require("express");
const { protect, authorize } = require("../middleware/auth");

const {
  getItinerary,
  getItineraries,
  createItinerary,
  updateItinerary,
  deleteItinerary,
} = require("../controllers/itineraries");

const router = Router();

router
  .route("/")
  .get(getItineraries)
  .post(protect, authorize("publisher", "admin"), createItinerary);

router
  .route("/:id")
  .get(getItinerary)
  .put(protect, authorize("publisher", "admin"), updateItinerary)
  .delete(protect, authorize("publisher", "admin"), deleteItinerary);

module.exports = router;
