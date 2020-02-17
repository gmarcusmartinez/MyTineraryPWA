const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const express = require("express");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const auth = require("./routes/auth");
const cities = require("./routes/cities");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Mount Routers
// app.use("/api/auth", auth);
app.use("/api/cities", cities);

const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, console.log(`Server running on port:${PORT}`.yellow.bold));
