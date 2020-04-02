const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const Activity = require("./models/Activity");
const Itinerary = require("./models/Itinerary");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const activities = JSON.parse(
  fs.readFileSync(`${__dirname}/data/activities.json`)
);

const itineraries = JSON.parse(
  fs.readFileSync(`${__dirname}/data/itineraries.json`)
);

const importData = async () => {
  try {
    await Activity.create(activities);
    await Itinerary.create(itineraries);
    console.log("Data Imported.".green);
    process.exit();
  } catch (err) {
    console.error(err.message);
  }
};

const deleteData = async () => {
  try {
    await Activity.deleteMany();
    await Itinerary.deleteMany();
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
