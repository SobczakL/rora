const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect();

exports.userLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const query = `SELECT * FROM userData WHERE username = ?`;
        const [rows] = await connection.promise().query(query, [username]);

        if (rows.length === 0) {
            res.status(404).json({ error: "USER_NOT_FOUND" });
        } 
        else if (rows[0].password === password) {
            const { first_name, username, password } = rows[0];
            const payload = { first_name, username, password };
            console.log(payload)
            res.status(200).json(payload);
        } 
        else {
            res.status(401).json({ error: "INCORRECT_PASSWORD" });
        }
    } 
    catch (err) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
};

exports.getUserDetails = async(req, res) => {
    const { username } = req.body;

    try {
      const query = 'SELECT * FROM userData WHERE username = ?';
      const [rows] = await connection.promise().query(query, [username]);

        if (rows.length === 0) {
            res.status(404).send("No user data found.");
        } 
        else {
            res.status(200).json(rows);
        }
    } 
    catch (err) {
        res.status(500).send(err.error);
    } 
};

exports.editUserDetails = async(req, res) => {
    const { username, data } = req.body;
    const newUserDetails = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        card_number: data.cardNumber,
        ex_date: data.exDate,
        cvc: data.cvc,
        zip: data.zip,
    };

    try {
        const query = 'UPDATE userData SET ? WHERE username = ?';
        await connection.promise().query(query, [newUserDetails, username]);
    } 
    catch (err) {
        res.status(500).send(err.error); 
    }
};
