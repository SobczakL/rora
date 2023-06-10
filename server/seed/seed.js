import axios from "axios";
import { dropUserData, insertUserData, createUserData, dropUserSavedRoutes, insertUserSavedRoutes, createUserSavedRoutes } from './sql.js';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

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
    zip: "1A1 A1A",
} 

const firstRoute = {
  id: "23ffdd38-325b-48f4-98f2-3684d74f49f0",
  username: "SobczakL",
  routeId: "TTC:83903", 
  routeNumber: "121", 
  routeHeading: "West", 
  routeName: "Esplanade-River", 
  routeType: "3"
}

const loadAndSaveData = async () => {
  try {
    await connection.query(dropUserData);
    console.log('***dropped user data***');

    await connection.query(createUserData);
    console.log('***created user table***');

    await connection.query(insertUserData, [firstUser]);
    console.log('***first user saved***');

    await connection.query(dropUserSavedRoutes);
    console.log('***dropped user saved routes***');

    await connection.query(createUserSavedRoutes);
    console.log('***created user saved routes table***');

    await connection.query(insertUserSavedRoutes, [firstRoute]);
    console.log('***first saved route***');

  } catch (err) {
    console.error(err);
    
  }
}

await loadAndSaveData(); 
process.exit(0);
