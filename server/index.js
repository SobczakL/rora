require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors")
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const PORT = process.env.DB_PORT || 8080 ;


// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
const transitRoutesRoutes = require("./routes/transitRoutesRoutes");

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

