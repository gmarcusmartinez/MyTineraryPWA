const Activity = require("../models/Activity");
const Itinerary = require("../models/Itinerary");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

exports.getActivities = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
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
  req.body.itinerary = req.params.itineraryId;
  req.body.publisher = req.user.id;

  const itinerary = await Itinerary.findById(req.params.itineraryId);

  if (!itinerary) {
    return next(new ErrorResponse(`Itinerary not found`));
  }
  const publisher = itinerary.publisher.toString();
  if (publisher !== req.user.id && req.user.role !== "admin") {
    return next(new ErrorResponse(`Not Authorized`, 404));
  }

  const activity = await Activity.create(req.body);
  res.status(201).json({ success: true, data: activity });
});

exports.updateActivity = asyncHandler(async (req, res, next) => {
  let activity = await Activity.findById(req.params.id);
  if (!activity) {
    return next(new ErrorResponse(`Activity not found.`, 404));
  }
  const publisher = activity.publisher.toString();
  if (publisher !== req.user.id && req.user.role !== "admin") {
    return next(new ErrorResponse(`Not Authorized`, 404));
  }

  activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, data: activity });
});

exports.deleteActivity = asyncHandler(async (req, res, next) => {
  const activity = await Activity.findById(req.params.id);
  if (!activity) {
    return next(new ErrorResponse(`Activity not found `, 404));
  }

  const publisher = activity.publisher.toString();
  if (publisher !== req.user.id && req.user.role !== "admin") {
    return next(new ErrorResponse(`Not Authorized`, 404));
  }

  await activity.remove();
  res.status(200).json({ success: true });
});
