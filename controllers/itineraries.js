const Itinerary = require("../models/Itinerary");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

exports.getItineraries = asyncHandler(async (req, res, next) => {
  let query;

  const reqQuery = { ...req.query };
  const removeFields = ["select", "sort"];

  removeFields.forEach((param) => delete reqQuery[param]);

  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  query = Itinerary.find(JSON.parse(queryStr));

  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }
  console.log(req.query.sort);
  const itineraries = await query;
  res
    .status(200)
    .json({ success: true, count: itineraries.length, data: itineraries });
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
  const itinerary = await Itinerary.create(req.body);
  res.status(201).json({ success: true, data: itinerary });
});

exports.updateItinerary = asyncHandler(async (req, res, next) => {
  const itinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!itinerary) {
    return next(
      new ErrorResponse(`Itinerary not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ sucess: true, data: itinerary });
});

exports.deleteItinerary = asyncHandler(async (req, res, next) => {
  const itinerary = await Itinerary.findByIdAndDelete(req.params.id);
  if (!itinerary) {
    return next(
      new ErrorResponse(`Itinerary not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true });
});
