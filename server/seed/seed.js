const {
  dropUserData,
  insertUserData,
  createUserData,
  dropUserSavedRoutes,
  insertUserSavedRoutes,
  createUserSavedRoutes
} = require('./sql.js');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const firstUser = {
  id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
  username: "SobczakL",
  password: "password",
  email: "SobczakL@rora.com",
  first_name: "Lucas",
  last_name: "Sobczak",
  phone: "416-123-1234",
  card_number: "1234 1234 1234 1234",
  ex_date: "01/23",
  cvc: "123",
  zip: "1A1A1A",
};

const firstRoute = {
  id: "23ffdd38-325b-48f4-98f2-3684d74f49f0",
  username: "SobczakL",
  routeId: "TTC:83903",
  routeNumber: "121",
  routeHeading: "West",
  routeName: "Esplanade-River",
  routeType: "3",
};

const loadAndSaveData = async (connection) => {
    try {
        await connection.query(dropUserData);
        console.log('***dropped user data***');

        await connection.query(createUserData);
        console.log('***created user table***');

        const firstUserValues = Object.values(firstUser)
        await connection.query(insertUserData, firstUserValues);
        console.log('***first user saved***');

        await connection.query(dropUserSavedRoutes);
        console.log('***dropped user saved routes***');

        await connection.query(createUserSavedRoutes);
        console.log('***created user saved routes table***');

        const firstRouteValues = Object.values(firstRoute)
        await connection.query(insertUserSavedRoutes, firstRouteValues);
        console.log('***first saved route***');

  } 
    catch (err) {
        console.error(err);
  }
};

(async () => {
    try {
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        console.log('Connected to the database');

        await loadAndSaveData(connection);

        connection.end();
        console.log('Connection closed');

        process.exit(0);
    }   
    catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
})();

