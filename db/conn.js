const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery");
        await mongoose.connect("mongodb+srv://clucasrodrigues22:e4IuHq4uaNH7qClA@cluster0.dpeurok.mongodb.net/");
        console.log('Banco ok');
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}
module.exports = main;