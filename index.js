// import express from "express"
// import livereload from "livereload"

// const express = require('express');
// const app = express();
// const path = require('path');
// const publicDirectory = path.join(__dirname, 'public')
// const liveReloadServer = livereload.createServer()
// liveReloadServer.watch(__dirname, 'public');
// const connectLivereload = require("connect-livereload");

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(connectLivereload())

// app.get('/', (req, res) => {
//   res.render('index');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import express from "express";
import livereload from "livereload";
import path from "path";
import { fileURLToPath } from "url";
import connectLivereload from "connect-livereload";
import nodemailer from "nodemailer";

// Convert __dirname to be compatible with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const publicDirectory = path.join(__dirname, "public");

//const liveReloadServer = livereload.createServer({ port: 35730 }); // Use a different port

const liveReloadServer = livereload.createServer({ port: 35730 });
liveReloadServer.watch(publicDirectory);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(publicDirectory));
// app.use(express.static('public'))
app.use(connectLivereload());

// ROUTES
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Send Email Route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "MEDICINE QUOTE REQUEST",
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: \n$${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect("/");
  }catch (error) {
    res.status(500).send("Error sending message.")
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

