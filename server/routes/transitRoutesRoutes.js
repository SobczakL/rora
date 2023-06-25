const router = require("express").Router();
const transitRoutesController = require("../controllers/transitRoutesController");
const savedRoutesController = require("../controllers/savedRoutesController");
const routeDetailsController = require("../controllers/routeDetailsController");

router.route("/").post(transitRoutesController.getNearbyRoutes);
router.route("/search").post(transitRoutesController.searchRoutes);

router.route("/savedRoutes").post(savedRoutesController.getSavedRoutes);
router.route("/saveRoutes").post(savedRoutesController.addSavedRoutes);
router.route("/checkSavedRoutes").post(savedRoutesController.checkSavedRoutes);
router.route("/deleteRoutes").post(savedRoutesController.deleteSavedRoutes);

router.route("/:id").get(routeDetailsController.routeDetails);

module.exports = router;
