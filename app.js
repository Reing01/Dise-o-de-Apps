const express = require("express");

const app = express();

app.get("/", (req, res) => {
    //res.send("!Hola mundo!");
    res.sendFile("D:/4° cuatri/diseño de apps/Unidad 1/Repositorio/index.html")
});

app.listen  (8000, () => {
    console.log("server running on port", 8000);
});