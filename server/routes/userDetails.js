const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/userDetails").post(userController.getUserDetails);
router.route("/editUserDetails").post(userController.editUserDetails);

module.exports = router;
