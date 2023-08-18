const router = require("express").Router();

const partyController = require("../app/controllers/PartyController");

// router post parties
router.route("/parties").post((req, res) => partyController.create(req, res));

// router get all parties
router.route("/parties").get((req, res) => partyController.getAll(req, res));

// router get party by id
router.route("/party/:id").get((req, res) => {
    partyController.get(req, res);
});

// router delete party
router.route("/party/:id").delete((req, res) => {
    partyController.delete(req, res);
});

// router update party by id
router.route("/party/:id").put((req, res) => {
    partyController.update(req, res);
});

module.exports = router;