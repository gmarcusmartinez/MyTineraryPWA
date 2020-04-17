const hpp = require("hpp");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const xss = require("xss-clean");
const express = require("express");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");

const connectDB = require("./config/db");
const errorHanlder = require("./middleware/error");

dotenv.config({ path: "./config/config.env" });
require("./services/passport");

const auth = require("./routes/auth");
const users = require("./routes/users");
const google = require("./routes/google");
const reviews = require("./routes/reviews");
const activities = require("./routes/activities");
const itineraries = require("./routes/itineraries");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(mongoSanitize());
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());
app.use(xss());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(hpp());

// Mount Routers
app.use("/api/v1/auth", auth);
app.use("/api/v1/google", google);

app.use("/api/v1/users", users);
app.use("/api/v1/reviews", reviews);
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
