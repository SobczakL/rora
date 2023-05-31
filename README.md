# RORA

Rora is an all-in-one transit app, allowing users access to on-time transit scheduling, community engagement, and payment processing (TBD).

---

## Usage:

1. Npm i all dependencies into both the client and server folder.
    ```
    npm install
    ```

2. Database:

    - Create a .env file with the following:
    ```
        DB_HOST = localhost
        DB_PORT = 8080
        DB_LOCAL_DBNAME='rora'
        DB_LOCAL_USER= ** your admin user **
        DB_LOCAL_PASSWORD= ** your admin password **
    ```
    - Run in the terminal the following in order:
```
        knex seed:run
        knex migrate:latest
```
3. To run the application please do the following:
    - In client folder,
    ```
    npm run dev
    ```
    - In the server folder, run either of the following commands to start the server:
    ```
    nodemon index.js
    ``` 
    or 
    ```
    node index.js
    ```

### Login:

-   Username: SobczakL
-   Password: password

Please ensure your location services are turned on into order to use the application properly.

## Screenshots
![Rora login page](https://github.com/SobczakL/rora/assets/36972429/d7c7e031-6fdf-4ead-834c-5a430baee9b1)


### ** Important to keep in mind **

 - Rora is designed as a mobile app and should be experienced in a mobile view for optimal usage.
 - The API Rora uses has rate limits, allowing only 5 calls per minute. If components are not rendering properly, please wait for a minute and try again.

---

**I hope you enjoy using Rora!**
