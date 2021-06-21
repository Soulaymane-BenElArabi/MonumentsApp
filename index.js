const express = require("express");
const formData = require('express-form-data');
const formidable = require('express-formidable');
const cors = require("cors");
const app = express();
//const bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json());
app.use(formData.parse());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//connect to db
const mysql = require("mysql");
app.use(cors());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mapdb",
});


connection.connect(function (error) {
  if (!!error) console.log(error);
  else console.log("Database Connected!");
});
//monuments
app.get("/monuments", (req, res) => {
  let sql = "SELECT * FROM monument";
  let query = connection.query(sql, (err, rows) => {
    if (err) throw err;
	console.log("made it");
    res.send(rows);
  });
});
//users
app.get("/users", (req, res) => {
  let sql = "SELECT * FROM users";
  let query = connection.query(sql, (err, rows) => {
    if (err) throw err;
	console.log("made it");
    res.send(rows);
  });
});
 
app.post("/user/register", (req, res) => {
  /* res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); */ 
  
  let data = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    numTele: req.body.numTele,
    password: req.body.password,
  };
  res.send(data);
  console.log(data); 
  let sql = "INSERT INTO users SET ?";
  let query = connection.query(sql, data, (err, results) => {
    console.log(data.nom);
    if (err) throw err;
  });
});
//Ajout Monument
app.post("/ajout", (req, res) => {
  let data = {
    nom: req.body.nom,
    ville: req.body.ville,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
  };
  
  res.send(data);
  console.log(data); 
  let sql = "INSERT INTO monument SET ?";
  let query = connection.query(sql, data, (err, results) => {
    console.log(data.nom);
    if (err) throw err;
  });
});   
app.listen(3000, () => {
  console.log("Listening at port 3000...");
});
