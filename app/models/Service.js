// Import lib mongoose
const mongoose = require("mongoose");

// Destructuring do objeto Schema da biblioteca mongoose.
const { Schema } = mongoose;

// Destructuring the schema object of the mongoose lib.
const serviceSchema = new Schema(
    {
        // Defining fields, field type and whether it is mandatory
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        image: {
            type: String,
            require: true
        },
    },
    // Enabling automatic timestamps
    { timestamps: true }
);

// Creating a model called 'Service' using the 'serviceSchema' schema.
const Service = mongoose.model("Service", serviceSchema);

// Exporting the 'Service' model and 'serviceSchema' schema for use elsewhere.
module.exports = {
    Service,
    serviceSchema
}
