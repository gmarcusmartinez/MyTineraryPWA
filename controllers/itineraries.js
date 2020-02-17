const Itinerary = require("../models/Itinerary");

exports.getItinerary = async (req, res, next) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    res.status(200).json({ success: true, data: itinerary });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getItineraries = async (req, res, next) => {
  try {
    const itineraries = await Itinerary.find();
    res
      .status(200)
      .json({ success: true, count: itineraries.length, data: itineraries });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.createItinerary = async (req, res, next) => {
  try {
    const itinerary = await Itinerary.create(req.body);
    res.status(201).json({ success: true, data: itinerary });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.updateItinerary = async (req, res, next) => {
  try {
    const itinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!itinerary) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: itinerary });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.deleteItinerary = async (req, res, next) => {
  try {
    await Itinerary.findByIdAndDelete(req.params.id);
    if (!itinerary) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
