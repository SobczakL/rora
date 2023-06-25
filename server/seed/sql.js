const dropUserData = 'DROP TABLE IF EXISTS userData'; 
const dropUserSavedRoutes = 'DROP TABLE IF EXISTS userSavedRoutes'; 

const insertUserSavedRoutes = 'INSERT INTO userSavedRoutes(id, username, routeId, routeNumber, routeHeading, routeName, routeType) VALUES (?, ?, ?, ?, ?, ?, ?)';

const insertUserData = 'INSERT INTO userData(id, username, password, email, first_name, last_name, phone, card_number, ex_date, cvc, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';


const createUserData = `CREATE TABLE userData (
  id CHAR(36) NOT NULL,
  PRIMARY KEY (id),
  username VARCHAR(40),
  password VARCHAR(255),
  email VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  phone VARCHAR(30),
  card_number VARCHAR(25),
  ex_date VARCHAR(5),
  cvc VARCHAR(3), 
  zip VARCHAR(6)
)`;

const createUserSavedRoutes = `CREATE TABLE userSavedRoutes (
  id CHAR(36) NOT NULL,
  PRIMARY KEY (id),
  username VARCHAR(40),
  routeId VARCHAR(255), 
  routeNumber VARCHAR(255), 
  routeHeading VARCHAR(255), 
  routeName VARCHAR(255), 
  routeType VARCHAR(255)
)`;

module.exports = {
  dropUserData,
  dropUserSavedRoutes,
  insertUserSavedRoutes,
  insertUserData,
  createUserData,
  createUserSavedRoutes,
};


