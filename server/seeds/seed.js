import axios from "axios";
import { dropUserData, insertUserData, createUserData } from './sql.js';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const firstUser = {
    id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
    username: "SobczakL",
    password: "password",
    email: "SobczakL@rora.com",
    firstName: "Lucas",
    lastName: "Sobczak",
    phone: "416-123-1234",
    cardNumber: "1234 1234 1234 1234",
    exDate: "01/23",
    cvc: "123",
    zip: "1A1 A1A",
} 

const loadAndSave = async () => {
  try {
    await connection.querry(dropUserData);
    console.log('***dropped user data***');

    await connection.querry(createUserData);
    console.log('***created user table***');

    await connection.querry(insertUserData, [firstUser]);
    console.log('***first user saved***');

  } catch (err) {
    console.error(err);
    
  }
}

await loadAndSave(); 
process.exit(0);
