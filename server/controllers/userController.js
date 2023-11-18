const { prisma } = require('../lib/prisma')

exports.userLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.userData.findUnique({
            where:{
                username: username
            }
        })
        
        if (!user) {
            res.status(404).json({ error: "USER_NOT_FOUND" });
        } else if (user.password === password) {
            const { first_name, username, password } = user;
            const payload = { first_name, username, password };
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
        const userData = await prisma.userData.findMany({
            where: {
                username: username
            }
        });

        if (userData.length === 0) {
            res.status(404).send("No user data found.");
        } else {
            res.status(200).json(userData);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.editUserDetails = async (req, res) => {
    const { username, data } = req.body;

    try {
        await prisma.userData.update({
            where: {
                username: username
            },
            data: {
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                phone: data.phone,
                card_number: data.cardNumber,
                ex_date: data.exDate,
                cvc: data.cvc,
                zip: data.zip
            }
        });

        res.status(200).send("User details updated successfully.");
    } catch (err) {
        res.status(500).send(err.message);
    }
};
