const { Router } = require("express");

const {
  getActivity,
  getActivities,
  createActivity,
  updateActivity,
  deleteActivity
} = require("../controllers/activities");

const router = Router();

router
  .route("/")
  .get(getActivities)
  .post(createActivity);

router
  .route("/:id")
  .get(getActivity)
  .put(updateActivity)
  .delete(deleteActivity);

module.exports = router;
