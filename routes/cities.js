const { Router } = require("express");

const {
  getCities,
  getCity,
  updateCity,
  createCity,
  deleteCity
} = require("../controllers/cities");

const router = Router();

router
  .route("/")
  .get(getCities)
  .post(createCity);
router
  .route("/:id")
  .get(getCity)
  .put(updateCity)
  .delete(deleteCity);

module.exports = router;
