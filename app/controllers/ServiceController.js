const { Service: serviceModel } = require("../models/Service");

const serviceController = {

    // POST Method
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            }

            const response = await serviceModel.create(service);

            res.status(201).json({ response, msg: "Serviço inserido com sucesso" });
        } catch (error) {
            console.log(error);
        }
    },

    // GET Method
    getAll: async (req, res) => {
        try {
            const services = await serviceModel.find();

            res.status(200).json(services);
        } catch (error) {
            console.log(error);
        }
    },

    // GET register by ID
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await serviceModel.findById(id);
            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado." });
                return;
            }
            res.status(200).json(service);
        } catch (error) {
            console.log(error);
        }
    },

    // Delete method
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await serviceModel.findById(id);
            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado." });
                return;
            }
            const deleteService = await serviceModel.findByIdAndDelete(id);

            res.status(200).json({ deleteService, msg: "Serviço excluido com sucesso" });
        } catch (error) {
            console.log(error);
        }
    },

    // Update method
    update: async (req, res) => {
        try {
            const id = req.params.id;

            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            }

            const updateService = await serviceModel.findByIdAndUpdate(id, service);

            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado." });
                return;
            }

            res.status(200).json({ service, msg: "Serviço atualiado com sucesso" });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = serviceController;