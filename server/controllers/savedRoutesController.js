const prisma = require('../lib/prisma');

exports.getSavedRoutes = async (req, res) => {
    const { username } = req.body;

    try {
        const routes = await prisma.user.findMany({
            where: {
                username: username,
            },
        });

        if (routes.length === 0) {
            res.status(404).send("No saved routes found for the user.");
        } else {
            res.status(200).json(routes);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.checkSavedRoutes = async (req, res) => {
    const { username, routeId } = req.body;

    try {
        const route = await prisma.userSavedRoutes.findUnique({
            where: {
                username_routeId: {
                    username: username,
                    routeId: routeId,
                },
            },
        });

        if (!route) {
            res.status(404).send("No saved routes found for the user.");
        } else {
            res.status(200).json(route);
        }
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
};

exports.addSavedRoutes = async (req, res) => {
    const {
        username,
        routeNumber,
        routeName,
        routeHeading,
        routeId,
        routeType,
    } = req.body;

    try {
        const newRoute = await prisma.userSavedRoutes.create({
            data: {
                id: uuidv4(),
                username: username,
                routeNumber: routeNumber,
                routeName: routeName,
                routeHeading: routeHeading,
                routeId: routeId,
                routeType: routeType,
            },
        });

        res.status(201).send("Route saved");
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteSavedRoutes = async (req, res) => {
    const { username, routeId } = req.body;

    try {
        const deletedRoute = await prisma.userSavedRoutes.deleteMany({
            where: {
                username_routeId: {
                    username: username,
                    routeId: routeId,
                },
            },
        });

        if (deletedRoute.count === 0) {
            res.status(404).send("Route not found");
        } else {
            res.status(200).send("Route deleted");
        }
    } catch (err) {
        res.status(500).send(err);
    }
};
