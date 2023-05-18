require("dotenv").config(); // Load .env file
const PORT = process.env.PORT || 8080; // Read PORT value from .env or use default value 3000
const express = require("express");
const cors = require("cors");
const app = express();

// add routes
const userRoutes = require("./routes/userRoutes");
const transitRoutesRoutes = require("./routes/transitRoutesRoutes");
// This middleware allows to post JSON in request.body
app.use(express.json());

// This middleware implements Cross Origin Resource Sharing (CORS)
app.use(cors());

// Redirect incoming calls
app.use("/login", userRoutes);
app.use("/home", transitRoutesRoutes);

//Handle undefined route
app.use((req, res, next) => {
    res.status(404).send("Route not found.");
});

// Start the server listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
