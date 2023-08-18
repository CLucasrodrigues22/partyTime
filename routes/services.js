const router = require("express").Router();

const serviceController = require("../app/controllers/ServiceController");

// router post services
router.route("/services").post((req, res) => serviceController.create(req, res));

// router get all services
router.route("/services").get((req, res) => serviceController.getAll(req, res));

// router get service by id
router.route("/service/:id").get((req, res) => {
    serviceController.get(req, res);
});

// router delete service
router.route("/service/:id").delete((req, res) => {
    serviceController.delete(req, res);
});

// router update service by id
router.route("/service/:id").put((req, res) => {
    serviceController.update(req, res);
});

module.exports = router;