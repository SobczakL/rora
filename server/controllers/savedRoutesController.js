const { v4: uuidv4 } = require("uuid");
const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect();

exports.getSavedRoutes = async(req, res) => {
  const { username } = req.body;
  try {
    const query = 'SELECT * FROM userSavedRoutes WHERE username = ?' 
    const [rows] = await connection.promise().query(query, [username]);

    if (rows.length === 0) {
      res.status(404).send("No saved routes found for the user.");
    } 
    else {
      res.status(200).json(rows);
    }
  } 
  catch (err) {
    res.status(500).send(err);
  }
};

exports.checkSavedRoutes = async(req, res) => {
  const { username, routeId } = req.body;
  try {
    const query = 'SELECT * FROM userSavedRoutes WHERE username = ? AND WHERE routeId = ?' 
    const [rows] = await connection.promise().query(query, [username, routeId]);
    if (rows.length === 0) {
      res.status(404).send("No saved routes found for the user.");
    } 
    else {
      res.status(200).json(rows);
    }
  } 
  catch (err) {
    res.status(500).send(err);
  }
};

exports.addSavedRoutes = async(req, res) => {
  const {
    username,
    routeNumber,
    routeName,
    routeHeading,
    routeId,
    routeType,
  } = req.body;

  const id = uuidv4();

  const newRoute = {
    id,
    username,
    routeNumber,
    routeName,
    routeHeading,
    routeId,
    routeType,
  };

  const query = 'INSERT INTO userSavedRoutes SET ?' 
  const [rows] = await connection.promise().query(query, [newRoute]);
  
  try {
    res.status(201).send("Route saved")
  } 
  catch (err) {
    res.status(500).send(err) 
  }
};

exports.deleteSavedRoutes = async(req, res) => {
  const { username, routeId } = req.body;

  const query = 'DELETE FROM userSavedRoutes WHERE username = ? AND routeId = ?' 
  const [rows] = await connection.promise().query(query, [username, routeId]);

  try {
    if(rows == 0){
      res.status(404).send("Route not found")
    } 
    else {
      res.status(200).send("Route deleted")
    }
  } 
  catch (err) {
    res.status(500).send(err);
  }
};
