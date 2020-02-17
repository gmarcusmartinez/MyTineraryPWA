const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const auth = require("./routes/auth");
const cities = require("./routes/cities");

const app = express();
app.use(express.json());

// Mount Routers
app.use("/api/auth", auth);
app.use("/api/cities", cities);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port:${PORT}`));
