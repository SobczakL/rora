const router = require("express").Router();
const routesController = require("../controllers/routesController");

router.route("/").post(routesController.getNearbyRoutes);
router.route("/search").post(routesController.searchRoutes);
router.route("/savedRoutes").post(routesController.getSavedRoutes);
router.route("/saveRoutes").post(routesController.addSavedRoutes);
router.route("/checkSavedRoutes").post(routesController.checkSavedRoutes);
router.route("/deleteRoutes").post(routesController.deleteSavedRoutes);

router.route("/:id").get(routesController.routeDetails);

module.exports = router;
