const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mysql = require("mysql");

const app = express();

// creating MySql connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "mean_db"
});

const users = require("./routes/users");
app.use("/users", users);

// Port Number
const port = 3000;

// CORS middleware
app.use(cors());

//BodyParser Middleware
app.use(bodyParser.json());

//Starting server
app.listen(port, () => {
  console.log("Server started on Port " + port);
});

// Condition to check if connection exits
connection.connect(function(con) {
  if (con) throw con;
  console.log("Connected");
});

// In localhost:3000 index router
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});
// // parse application/x-www-form-urlencoded
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
