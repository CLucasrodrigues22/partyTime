const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

const conn = require("./db/conn")

conn();

//Router
const routes = require("./routes/router");
app.use("/api", routes);

app.listen(4000, function () {
    console.log('Servidor Ok');
});