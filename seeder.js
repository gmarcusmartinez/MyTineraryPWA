const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const User = require("./models/User");
const Review = require("./models/Review");
const Activity = require("./models/Activity");
const Itinerary = require("./models/Itinerary");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const activities = JSON.parse(
  fs.readFileSync(`${__dirname}/data/activities.json`)
);

const users = JSON.parse(fs.readFileSync(`${__dirname}/data/users.json`));

const itineraries = JSON.parse(
  fs.readFileSync(`${__dirname}/data/itineraries.json`)
);

const reviews = JSON.parse(fs.readFileSync(`${__dirname}/data/reviews.json`));

const importData = async () => {
  try {
    await User.create(users);
    await Activity.create(activities);
    await Itinerary.create(itineraries);
    await Review.create(reviews);
    console.log("Data Imported.".green);
    process.exit();
  } catch (err) {
    console.error(err.message);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Activity.deleteMany();
    await Itinerary.deleteMany();
    await Review.deleteMany();

    console.log("Data Destroyed.".red);
    process.exit();
  } catch (err) {
    console.error(err.message);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
