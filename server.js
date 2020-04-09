const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const errorHanlder = require("./middleware/error");

dotenv.config({ path: "./config/config.env" });

const auth = require("./routes/auth");
const users = require("./routes/users");
const activities = require("./routes/activities");
const itineraries = require("./routes/itineraries");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// Mount Routers
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/activities", activities);
app.use("/api/v1/itineraries", itineraries);

const PORT = process.env.PORT || 5000;

app.use(errorHanlder);
connectDB();

const server = app.listen(
  5000,
  console.log(`Server running on port:${PORT}`.yellow.bold)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(err.message);
  server.close(() => process.exit(1));
});
