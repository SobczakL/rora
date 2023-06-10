require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors")
const PORT = process.env.DB_PORT || 8080 ;


// This middleware implements Cross Origin Resource Sharing (CORS) 
app.use(cors());

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect();

// Add routes
const userRoutes = require("./routes/userRoutes");
const transitRoutesRoutes = require("./routes/transitRoutesRoutes");

// This middleware allows to post JSON in request.body
app.use(express.json());

// Redirect incoming calls
app.use("/login", userRoutes);
app.use("/home", transitRoutesRoutes);

// Handle undefined route
app.use((req, res, next) => {
  res.status(404).send("Route not found.");
});

// Start the server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

