const knex = require('knex')(require('../knexfile'))
const { v4: uuidv4 } = require('uuid');

exports.getSavedRoutes = (req, res) => {
    const { username } = req.body;
    knex('userSavedRoutes')
        .where('username', username)
        .select('*')
        .then((rows) => {
            if (rows.length === 0) {
                res.status(404).send('No saved routes found for the user.');
            } 
            else {
                res.status(200).json(rows);
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        })
}

exports.checkSavedRoutes = (req, res) => {
    const { username, routeId } = req.body;
    knex('userSavedRoutes')
        .where({ username: username, routeId: routeId })
        .select('*')
        .then((rows) => {
            if (rows.length === 0) {
                res.status(404).send('No saved routes found for the user.');
            } 
            else {
                res.status(200).json(rows);
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        }) 
}

exports.addSavedRoutes = (req, res) => {
    const {
        username,
        routeNumber,
        routeName,
        routeHeading,
        routeId,
        routeType
    } = req.body;

    const id = uuidv4()

    const newRoute = {
        id,
        username,
        routeNumber,
        routeName,
        routeHeading,
        routeId,
        routeType
    }
    knex('userSavedRoutes')
    .insert(newRoute)
    .then(() => {
        res.status(201).send('Route Saved.')
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.deleteSavedRoutes = (req, res) => {
    const {username, routeId} = req.body;
    knex('userSavedRoutes')
        .where({ username: username, routeId: routeId })
        .del()
        .then((deletedRow) => {
            if(deletedRow === 0){
                res.status(404).send('Route not found.')
            }
            else {
                res.status(200).send('Route deleted.')
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        })
}