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
        } else if (rows[0].password === password) {
            const { firstName, username, password } = rows[0];
            const payload = { firstName, username, password };
            res.status(200).json(payload);
        } else {
            res.status(401).json({ error: "INCORRECT_PASSWORD" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
};

// exports.getUserDetails = (req, res) => {
//     const { username } = req.body;
//     knex("userData")
//         .where("username", username)
//         .select("*")
//         .then((rows) => {
//             if (rows.length === 0) {
//                 res.status(404).send("No user data found.");
//             } else {
//                 res.status(200).json(rows);
//             }
//         })
//         .catch((err) => {
//             res.status(500).send(err.error);
//         });
// };
//
// exports.editUserDetails = (req, res) => {
//     const { username, data } = req.body;
//     const newUserDetails = {
//         firstName: data.firstName,
//         LastName: data.LastName,
//         email: data.email,
//         phone: data.phone,
//         cardNumber: data.cardNumber,
//         exDate: data.exDate,
//         cvc: data.cvc,
//         zip: data.zip,
//     };
//     knex("userData")
//         .where("username", username)
//         .update(newUserDetails)
//         .then((response) => {
//             res.status(200).send("User details saved.");
//         })
//         .catch((err) => {
//             res.status(500).send(err.error);
//         });
