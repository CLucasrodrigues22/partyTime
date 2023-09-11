const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery");
        await mongoose.connect("mongodb+srv://clucasrodrigues22:Shyu9s8Uce2dUJnL@cluster0.dpeurok.mongodb.net/?retryWrites=true&w=majority");
        console.log('Banco ok');
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}
module.exports = main;