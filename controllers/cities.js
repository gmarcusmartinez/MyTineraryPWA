exports.getCity = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show single city" });
};
exports.getCities = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show single cities" });
};
exports.createCity = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create City" });
};
exports.updateCity = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update City" });
};
exports.deleteCity = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete City" });
};
