const { Router } = require("express");

const {
  getItinerary,
  getItineraries,
  createItinerary,
  updateItinerary,
  deleteItinerary
} = require("../controllers/itineraries");

const router = Router();

router
  .route("/")
  .get(getItineraries)
  .post(createItinerary);

router
  .route("/:id")
  .get(getItinerary)
  .put(updateItinerary)
  .delete(deleteItinerary);

module.exports = router;
