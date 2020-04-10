const Review = require("../models/Review");
const Itinerary = require("../models/Itinerary");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

exports.getReviews = asyncHandler(async (req, res, next) => {
  if (req.params.itineraryId) {
    const reviews = await Review.find({ itinerary: req.params.itineraryId });
    res
      .status(200)
      .json({ success: true, count: reviews.length, data: reviews });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

exports.getReview = asyncHandler(async (req, res, next) => {
  const review = await (await Review.findById(req.params.id)).populate({
    path: "itinerary",
    select: "name",
  });
  if (!review) {
    return next(new ErrorResponse(`Review not found.`, 404));
  }
  res.status(200).json({
    success: true,
    data: review,
  });
});
exports.createReview = asyncHandler(async (req, res, next) => {
  req.body.itinerary = req.params.itineraryId;
  req.body.user = req.user.id;
  console.log(req.params.itineraryId);
  const itinerary = await Itinerary.findById(req.params.itineraryId);
  if (!itinerary) {
    return next(new ErrorResponse("Itinerary not found.", 404));
  }

  const review = await Review.create(req.body);
  res.status(201).json({
    success: true,
    data: review,
  });
});
