# RORA

Rora is an all-in-one transit app, allowing users access to on-time transit scheduling, community engagement, and payment processing (TBD).

---

## Setup:

1. Npm i all dependencies into both the client and server folder.

    `npm install`

2. Database:

    - Create a .env file with the following:
        - DB_HOST = localhost
        - DB_PORT = 8080
        - DB_LOCAL_DBNAME='rora'
        - DB_LOCAL_USER= ** your admin user **
        - DB_LOCAL_PASSWORD= ** your admin password **
    - Run in the terminal the following in order:

        - `knex seed:run`

        - `knex migrate:latest`

3. To run the application please do the following:
    - In client folder,
      `npm run dev`
    - In server folder, `nodemon index.js` or `node index.js`

Using the application:

Login:

-   Username: SobczakL
-   Password: password

**Please ensure your location services are turned on into order to use the application properly.**

---

### **_ Important to keep in mind _**

Rora is a mobile app and should be experienced in a mobile view. In addition, the API Rora uses has rate limits. During your use of the application, be mindful that the app can only process 5 calls/ min. If components are not rendering properly, please give it a minute and try again.

---

**I hope you enjoy using Rora!**
