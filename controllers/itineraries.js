const Itinerary = require("../models/Itinerary");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

exports.getItineraries = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.getItinerary = asyncHandler(async (req, res, next) => {
  const itinerary = await Itinerary.findById(req.params.id);
  if (!itinerary) {
    return next(
      new ErrorResponse(`Itinerary not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ sucess: true, data: itinerary });
});

exports.createItinerary = asyncHandler(async (req, res, next) => {
  req.body.publisher = req.user.id;
  const itinerary = await Itinerary.create(req.body);
  res.status(201).json({ success: true, data: itinerary });
});

exports.updateItinerary = asyncHandler(async (req, res, next) => {
  let itinerary = await Itinerary.findById(req.params.id);

  if (!itinerary) {
    return next(
      new ErrorResponse(`Itinerary not found with id of ${req.params.id}`, 404)
    );
  }
  if (
    itinerary.publisher.toString() !== req.user.id &&
    req.user.role !== "admin"
  ) {
    return next(new ErrorResponse(`Not Authorized`, 404));
  }

  itinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ sucess: true, data: itinerary });
});

exports.deleteItinerary = asyncHandler(async (req, res, next) => {
  const itinerary = await Itinerary.findById(req.params.id);

  if (!itinerary) {
    return next(
      new ErrorResponse(`Itinerary not found with id of ${req.params.id}`, 404)
    );
  }
  itinerary.remove();
  res.status(200).json({ success: true });
});
