const router = require("express").Router();
const transitRoutesController = require('../controllers/transitRoutesController')
const savedRoutesController = require('../controllers/savedRoutesController')
const routeDetailsController = require('../controllers/routeDetailsController')

router.route('/').post(transitRoutesController.getNearbyRoutes)

router.route('/savedRoutes').post(savedRoutesController.getSavedRoutes)
router.route('/saveRoute').post(savedRoutesController.addSavedRoutes)
router.route('/verifySavedRoute').post(savedRoutesController.checkSavedRoutes)
router.route('/deleteRoute').post(savedRoutesController.deleteSavedRoutes)


router.route('/:id').get(routeDetailsController.routeDetails)

module.exports = router;