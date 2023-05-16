const router = require("express").Router();
const userController = require('../controllers/userController')

router.route('/').post(userController.userLogin)
router.route('/userDetails').post(userController.getUserDetails)
// router.route('/').post(userController.userLogin)


module.exports = router;