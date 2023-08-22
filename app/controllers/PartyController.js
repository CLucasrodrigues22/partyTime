const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) => {

    const priceSum = services.reduce((sum, service) => sum + service.price, 0);
    if (priceSum < budget) {
        return false;
    }
    return true;
}

const partyController = {
    // POST method
    create: async (req, res) => {
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            }

            if (party.services && checkPartyBudget(party.budget, party.services)) {
                res.status(406).json({ msg: "Seu orçamento é insuficiente" });
                return;
            }

            const response = await PartyModel.create(party);
            res.status(201).json({ response, msg: "Festa criada com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },

    // GET method
    getAll: async (req, res) => {
        try {
            const parties = await PartyModel.find();

            res.status(200).json(parties);
        } catch (error) {
            console.log(error);
        }
    },

    // GET party by id
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const party = await PartyModel.findById(id);
            if (!party) {
                res.status(404).json({ msg: "Festa não encontrada" });
                return;
            }
            res.status(200).json(party);
        } catch (error) {
            console.log(error);
        }
    },

    // DELETE method
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const party = await PartyModel.findById(id);
            if (!party) {
                res.status(404).json({ msg: "Festa não encontrada" });
                return;
            }
            const deleteParty = await PartyModel.findByIdAndDelete(id);
            res.status(200).json({ deleteParty, msg: "Festa excluida com sucesso." });
        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;

            const partyUpdates = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            };

            if (partyUpdates.services && checkPartyBudget(partyUpdates.budget, partyUpdates.services)) {
                return res.status(406).json({ msg: "Seu orçamento é insuficiente" });
            }

            const updateParty = await PartyModel.findByIdAndUpdate(id, partyUpdates, { new: true });

            if (!updateParty) {
                return res.status(404).json({ msg: "Festa não encontrada" });
            }

            return res.status(200).json({ updateParty, msg: "Festa atualizada com sucesso" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Ocorreu um erro durante a atualização da festa" });
        }

    }
}

module.exports = partyController;