// global var containts all modules needed
const express = require('express');
const ejs = require('ejs');

// create server
const app = express()
let title = "Welcome to EJS course"
let bodyPart = "Salam Guys, welcome to my website"
app.set('view engine','ejs')
//create route
app.get("/",(req,res) => {
  res.render("index", {t:title,bodyPart})
})

// server is listening at port 1818
app.listen(1818,() => {
  console.log("Listening at port 1818");
});
