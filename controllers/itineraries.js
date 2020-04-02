// const Itinerary = require("../models/Itinerary");
// const asyncHandler = require("../middleware/async");
// const ErrorResponse = require("../utils/errorResponse");
exports.getItineraries = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all itineraries" });
};
exports.getItinerary = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show single itinerary" });
};
exports.createItinerary = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new itinerary" });
};
exports.updateItinerary = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update  itinerary" });
};
exports.deleteItinerary = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete  itinerary" });
};
// exports.getItineraries = asyncHandler(async (req, res, next) => {
//   let query;

//   let queryStr = JSON.stringify(req.query);

//   queryStr = queryStr.replace(/\b(gt|gte|te|lte|in)\b/g, match => {
//     `${match}`;
//   });
//   query = Itinerary.find(JSON.parse(queryStr));
//   const itineraries = await query;

//   res
//     .status(200)
//     .json({ success: true, count: itineraries.length, data: itineraries });
// });

// exports.getItinerary = asyncHandler(async (req, res, next) => {
//   const itinerary = await Itinerary.findById(req.params.id);
//   if (!itinerary) {
//     return next(
//       new ErrorResponse(`Itinerary not found with id of ${req.params.id}`, 404)
//     );
//   }
//   res.status(200).json({ sucess: true, data: itinerary });
// });

// exports.createItinerary = asyncHandler(async (req, res, next) => {
//   // req.body.itineraryCreator = req.user.id;

//   const itinerary = await Itinerary.create(req.body);
//   res.status(201).json({ success: true, data: itinerary });
// });

// exports.updateItinerary = asyncHandler(async (req, res, next) => {
//   let itinerary = await Itinerary.findById(req.params.id);

//   if (!itinerary) {
//     return next(
//       new ErrorResponse(`Itinerary not found with id of ${req.params.id}`, 404)
//     );
//   }
//   itinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true
//   });
//   res.status(200).json({ sucess: true, data: itinerary });
// });

// exports.deleteItinerary = asyncHandler(async (req, res, next) => {
//   let itinerary = await Itinerary.findById(req.params.id);

//   if (!itinerary) {
//     return next(
//       new ErrorResponse(`Itinerary not found with id of ${req.params.id}`, 404)
//     );
//   }
//   itinerary.remove();

//   res.status(200).json({ sucess: true, msg: "Itinerary deleted." });
// });
