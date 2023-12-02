const prisma = require('../lib/prisma')

exports.userLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findMany({
            where:{
                username: username
            }
        })
        if (!user) {
            res.status(404).json({ error: "USER_NOT_FOUND" });
        } else if (user[0].password === password) {
            const payload = { 
                first_name: user[0].firstName, 
                username: user[0].username, 
                password: user[0].password 
            };
            res.status(200).json(payload);
        } else {
            res.status(401).json({ error: "INCORRECT_PASSWORD" });
        }
    } catch (err) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
};

exports.getUserDetails = async (req, res) => {
    const { username } = req.body;

    try {
        const user = await prisma.user.findMany({
            where: {
                username: username
            }
        });

        if (!user) {
            res.status(404).send("No user data found.");
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.editUserDetails = async (req, res) => {
    const { username, data } = req.body;

    try {
        await prisma.user.update({
            where: {
                username: username
            },
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                cardNumber: data.cardNumber,
                exDate: data.exDate,
                cvc: data.cvc,
                zip: data.zip
            }
        });

        res.status(200).send("User details updated successfully.");
    } catch (err) {
        res.status(500).send(err.message);
    }
};
