const express = require("express");
const { createConnection } = require("mysql2/promise");
const dotenv = require("dotenv");
const cors = require("cors")
const mysql = require('mysql2');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const startServer = async () => {
    try {
        const connection = await createConnection(process.env.DATABASE_URL);

        // Add routes
        const userRoutes = require("./routes/userRoutes")(connection);
        const transitRoutesRoutes = require("./routes/transitRoutesRoutes")(connection);

        // This middleware allows to post JSON in request.body
        app.use(express.json());

        // This middleware implements Cross Origin Resource Sharing (CORS)
        app.use(cors());

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
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
};

startServer;
