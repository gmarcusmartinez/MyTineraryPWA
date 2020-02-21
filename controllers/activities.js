const Activity = require("../models/Activity");

exports.getActivity = async (req, res, next) => {
  try {
    const activity = await Activity.findById(req.params.id);
    res.status(200).json({ success: true, data: activity });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getActivities = async (req, res, next) => {
  try {
    const activities = await Activity.find();
    res
      .status(200)
      .json({ success: true, count: activities.length, data: activities });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.createActivity = async (req, res, next) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json({ success: true, data: activity });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.updateActivity = async (req, res, next) => {
  try {
    const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!activity) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: activity });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.deleteActivity = async (req, res, next) => {
  try {
    await Activity.findByIdAndDelete(req.params.id);
    if (!activity) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
