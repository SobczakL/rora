const knex = require('knex')(require('../knexfile'))

exports.userLogin = (req, res) => {
    const { username, password } = req.body;
    knex('userData')
        .where('username', username)
        .then((rows) => {
            if (rows.length === 0) {
                res.status(404).json({ error: 'USER_NOT_FOUND' });
            } else if (rows[0].password === password) {
                const { firstName, username, password } = rows[0];
                const payload = { firstName, username, password };
                res.status(200).json(payload);
            } else {
                res.status(401).json({ error: 'INCORRECT_PASSWORD' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send(err.error);
        });
}

exports.getUserDetails = ((req, res) => {
    const { username } = req.body;
    knex('userData')
        .where('username', username)
        .select('*')
        .then((rows) => {
            if (rows.length === 0) {
                res.status(404).send('No user data found.')
            }
            else {
                res.status(200).json(rows)
            }
        })
        .catch((err) => {
            res.status(500).send(err.error)
        })
})