const router = require("express").Router();
const loginController = require("../controllers/loginController");

router.route("/").post(loginController.userLogin);

module.exports = router;