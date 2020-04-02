const { Router } = require("express");

const {
  getItinerary,
  getItineraries,
  createItinerary,
  updateItinerary,
  deleteItinerary
} = require("../controllers/itineraries");

const router = Router();

router.route("/").post(createItinerary);
router.route("/:city").get(getItineraries);

router
  .route("/:id")
  .get(getItinerary)
  .put(updateItinerary)
  .delete(deleteItinerary);

module.exports = router;
