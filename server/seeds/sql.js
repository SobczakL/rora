
export const dropUserData = 'DROP TABLE IF EXISTS userData'; 
export const insertUserData = 'INSERT INTO userData(id, username, password, email, firstName, lastName, phone, cardNumber, exDate, cvc, zip) VALUES ?';

export const createUserData = 'CREATE TABLE userData (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  username VARCHAR(40),
  password VARCHAR(255),
  email VARCHAR(255),
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  phone VARCHAR(20),
  cardNumber VARCHAR(25),
  exDate VARCHAR(5),
  cvc VARCHAR(3), 
  zip VARCHAR(6)
)';
