//Hämta paket
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const { log } = require("console");
const app = new express();
const portNr = 8081;
const path = require("path");
const jsonFilePath = "./data/data.json";
const jsonLoginPath = "./data/login.json";


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

//Skapa en Get metod som returnerar index.html
app.get("/index", (req, res) => {
    res.sendFile("index.html", {root: __dirname});
});

//Skapa en Get metod som returnerar login.html
app.get("/login", (req, res) => {
    res.sendFile("login.html", {root: __dirname});
});

//Skapa en Get metod som returnerar signup.html
app.get("/signup", (req, res) => {
    res.sendFile("signup.html", {root: __dirname});
});

//Skapa en Get metod som returnerar about.html
app.get("/about", (req, res) => {
    res.sendFile("about.html", {root: __dirname});
});

//Skapa en Get metod som returnerar about.html
app.get("/registeredUsers", (req, res) => {
    res.sendFile("registeredUsers.html", {root: __dirname});
});


//Skapa en metod som returnera body-data som en JSON string
app.post("/signup", (req, res) => {
    if(password != confirmPassword){
        return;
    }
    
    const jsonData = JSON.stringify(req.body, null, 2);
    
    //Skriva JSON string till fil
    fs.writeFileSync("testdata.json", jsonData, (err) => {
        //Om error, skriv ut error
        if(err){
            console.log(err);
        }
    });
});

//Login 
app.post("/login", (req, res) => {
    let loginUsername = req.body.username;
    let loginPassword = req.body.password;

    console.log(loginUsername, loginPassword);

    fs.readFile(jsonFilePath, (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        let jsonData = JSON.parse(data);
        console.log(jsonData.username);

        if(loginUsername == jsonData.username && loginPassword == jsonData.password){
            console.log("Inloggad");
            res.sendFile("signedIn.html", {root: __dirname});
        }
    })

    //res.send(`Username: ${username} Password: ${password}`);
});
