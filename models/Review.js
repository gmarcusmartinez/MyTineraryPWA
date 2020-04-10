const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  itinerary: {
    type: mongoose.Schema.ObjectId,
    ref: "itinerary",
    required: true,
  },
  text: {
    type: String,
    required: [true, "Please add text."],
    maxlength: [500, "Review should not exceed 500 characters."],
    trim: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Please add a rating."],
  },
});

ReviewSchema.statics.calculateAverageRating = async function (itinerary_id) {
  const obj = await this.aggregate([
    {
      $match: { itinerary: itinerary_id },
    },
    {
      $group: {
        _id: "$itinerary",
        averageRating: {
          $avg: "$rating",
        },
      },
    },
  ]);
  try {
    await this.model("itinerary").findByIdAndUpdate(itinerary_id, {
      averageRating: obj[0].averageRating.toFixed(2),
    });
  } catch (error) {
    console.error(error);
  }
};

ReviewSchema.post("save", function () {
  this.constructor.calculateAverageRating(this.itinerary);
});
ReviewSchema.pre("remove", function () {
  this.constructor.calculateAverageRating(this.itinerary);
});

ReviewSchema.index({ itinerary: 1, user: 1 }, { unique: true });

module.exports = Review = mongoose.model("review", ReviewSchema);
