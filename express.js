//Hämta paket
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = new express();
const portNr = 8081;
const jsonFilePath = "./data.json"


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname));

//Sätta upp en listener för app
app.listen(portNr, () => {
    console.log(`Server ligger nu på ${portNr} och lyssnar`);
});

//Skapa en Get metod som returnerar index.html
app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname});
});

//Skapa en Get metod som returnerar login.html
app.get("/login", (req, res) => {
    res.sendFile("login.html", {root: __dirname});
});

//Skapa en Get metod som redirectar /about tillbaka till index.html eller "/"
app.get("/about", (req, res) => {
    res.redirect("/");
});

//Skapa en metod som returnera body-data som en JSON string
app.post("/", (req, res) => {
    let data = req.body;

    //Konverterar age till en int
    data.age = parseInt(data.age);

    let jsonData = JSON.stringify(data, null, 2);

    console.log(jsonData);

    //Skriva JSON string till fil
    fs.writeFile(jsonFilePath, jsonData, (err) => {
        //Om error, skriv ut error
        if(err) console.log(err);
    });

    res.send("Data Received: " + jsonData);
});