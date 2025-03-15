require('dotenv').config();
const express = require("express");
const mysql = require('mysql2');
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");
const { faker } = require("@faker-js/faker");
const bcrypt = require('bcryptjs');  // More reliable across environments


const app = express();
const port = process.env.PORT || 8000;  // Load port from .env

// Middleware
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Database Connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// Function to Generate Random User Data
const getRandomUser = () => {
  return [
    uuidv4(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home Route - Show Total Users Count
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) AS count FROM users`;
  connection.query(q, (err, result) => {
    if (err) {
      console.error(err);
      return res.send("Database Error!");
    }
    let count = result[0].count;
    res.render("home.ejs", { count });
  });
});

// Show Users Route
app.get("/user", (req, res) => {
  let q = "SELECT * FROM users";
  connection.query(q, (err, users) => {
    if (err) {
      console.error(err);
      return res.send("Database Error!");
    }
    res.render("showusers.ejs", { users });
  });
});

// New User Form Route
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

// Add New User Route
app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  let q = `INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)`;

  connection.query(q, [id, username, email, password], (err) => {
    if (err) {
      console.error(err);
      return res.send("Database Error!");
    }
    console.log("New user added!");
    res.redirect("/user");
  });
});

// Edit User Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM users WHERE id = ?`;

  connection.query(q, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.send("Database Error!");
    }
    res.render("edit.ejs", { user: result[0] });
  });
});

// Update User Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;

  let q = `SELECT * FROM users WHERE id = ?`;
  connection.query(q, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.send("Database Error!");
    }
    let user = result[0];
    
    if (!user || formPass !== user.password) {
      return res.send("Wrong password!");
    }

    let q2 = `UPDATE users SET username = ? WHERE id = ?`;
    connection.query(q2, [newUsername, id], (err) => {
      if (err) {
        console.error(err);
        return res.send("Database Error!");
      }
      res.redirect("/user");
    });
  });
});

// Delete User Form Route
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM users WHERE id = ?`;

  connection.query(q, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.send("Database Error!");
    }
    res.render("delete.ejs", { user: result[0] });
  });
});

// Delete User Route
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM users WHERE id = ?`;

  connection.query(q, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.send("Database Error!");
    }

    let user = result[0];
    if (!user || user.password !== password) {
      return res.send("Wrong password!");
    }

    let q2 = `DELETE FROM users WHERE id = ?`;
    connection.query(q2, [id], (err) => {
      if (err) {
        console.error(err);
        return res.send("Database Error!");
      }
      res.redirect("/user");
    });
  });
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
