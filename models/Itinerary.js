const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema(
  {
    publisher: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
      maxlength: [30, "Title must be under 30 charachters"],
    },
    slug: String,
    city: {
      type: String,
      required: true,
      lowercase: true,
    },
    photo: {
      type: String,
      required: true,
      default: "",
    },
    description: {
      type: String,
      trim: true,
      maxlength: [140, "Description must be under 140 charachters"],
    },
    price: {
      type: String,
      default: "$",
      enum: ["$", "$$", "$$$"],
    },
    duration: {
      type: String,
      enum: ["1-3 Hours", "3-5 Hours", "5+ Hours"],
    },
    published: {
      type: Boolean,
      default: false,
    },
    averageRating: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ItinerarySchema.pre("save", function (next) {
  this.slug = slugify(`${this.city}-${this.title}`, { lower: true });
  next();
});

ItinerarySchema.pre("remove", async function (next) {
  await this.model("activity").deleteMany({ itinerary: this._id });
  next();
});

ItinerarySchema.virtual("activities", {
  ref: "activity",
  localField: "_id",
  foreignField: "itinerary",
  justOne: false,
});

module.exports = Itinerary = mongoose.model("itinerary", ItinerarySchema);
