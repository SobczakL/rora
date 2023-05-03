const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

router.route('/').post((req, res) => {
    const { username, password } = req.body;
    knex('users')
        .where('username', username)
        .then((rows) => {
            if (rows.length === 0) {
                res.status(404).send('User not found');
            } else if (rows[0].password === password) {
                res.status(200).send('Login successful');
            } else {
                res.status(401).send('Incorrect password');
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error');
        });
});

module.exports = router;