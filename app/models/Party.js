// Import lib mongoose
const mongoose = require("mongoose");

// Destructuring do objeto Schema da biblioteca mongoose.
const { Schema } = mongoose;

const { serviceSchema } = require("./Service");

const partySchema = new Schema(
    {
        // Defining fields, field type and whether it is mandatory
        title: {
            type: String,
            require: true
        },
        author: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        budget: {
            type: Number,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        services: {
            type: [serviceSchema]
        }
    }, { timestamps: true }
);

// Creating a model called 'Party' using the 'partySchema' schema.
const Party = mongoose.model("Party", partySchema);

// Exporting the 'Party' model and 'partySchema' schema for use elsewhere.
module.exports = Party;