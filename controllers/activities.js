const Activity = require("../models/Activity");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

exports.getActivities = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.itineraryId) {
    query = Activity.find({ itinerary: req.params.itineraryId });
  } else {
    query = Activity.find();
  }
  const activities = await query;
  res
    .status(200)
    .json({ success: true, count: activities.length, data: activities });
});

exports.getActivity = asyncHandler(async (req, res, next) => {
  const activity = await Activity.findById(req.params.id);
  if (!activity) {
    return next(
      new ErrorResponse(`Activity not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ sucess: true, data: activity });
});

exports.createActivity = asyncHandler(async (req, res, next) => {
  const activity = await Activity.create(req.body);
  res.status(201).json({ success: true, data: activity });
});

exports.updateActivity = asyncHandler(async (req, res, next) => {
  const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!activity) {
    return next(
      new ErrorResponse(`Activity not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: activity });
});

exports.deleteActivity = asyncHandler(async (req, res, next) => {
  const activity = await Activity.findByIdAndDelete(req.params.id);
  if (!activity) {
    return next(
      new ErrorResponse(`Activity not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true });
});
