const { Router } = require("express");

const {
  getActivity,
  getActivities,
  createActivity
} = require("../controllers/activities");

const router = Router();

router
  .route("/")
  .get(getActivities)
  .post(createActivity);

router.route("/:id").get(getActivity);

module.exports = router;
