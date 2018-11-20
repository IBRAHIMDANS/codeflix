// global var containts all modules needed
const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const Sequelize = require('sequelize');
const sqlite3 = require('sqlite3');

// create server
const app = express()
app.set('view engine','ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/////////////////////// MAPPING WITH SEQUELIZE ////////////////////////////

//Creating map of db
const db = new Sequelize('database','yassine','azerty',{
  dialect: 'sqlite',
  host: '127.0.0.1',
  port: 1818,
  storage : 'myPocket'
})
// create model of Table user
const userModel = db.define('users',{
  nickname : {type : Sequelize.STRING},
  email : {type : Sequelize.STRING},
  password : {type : Sequelize.STRING},
  fullname : {type : Sequelize.STRING}
})

/////// GET ////////////////////
app.get("/",(req,res) => {

  userModel.findAll().then(urs =>{
    res.render("index",{urs})
  })
})


//// Inscription //////
app.get("/signup",(req,res) => {

  res.render("signUp")
})



//// connection //////
app.get("/signin",(req,res) => {

  res.render("signIn")
})


//////////////// creer un utilisateur //////////////////
app.post("/signup",(req,res) => {

  const data = {
    nickname: req.body.nickname,
    email: req.body.email,
    password: req.body.password,
    fullname: req.body.fullname
  };
  userModel.sync().then(function () {
    return userModel.create({
      nickname : data.nickname,
      email : data.email,
      password : data.password,
      fullname : data.fullname
    });
  });
res.render("signIn")

})

// page de connection
app.post("/signin",(req,res) => {
  const data = {
    nickname: req.body.nickname,
    password: req.body.password
  };
  userModel.sync().then(function () {
    return userModel.findOne(
      { where: {
        nickname: data.nickname,
        password: data.password
      }}).then(function(instanceOfUsers) {
        if (instanceOfUsers === null  || (!data.nickname && !data.password) ) {

          res.render("signUp")
        }

        res.render("index",{urs : instanceOfUsers.get('nickname')})
      });
    });

  })

  // server is listening at port 1818
  app.listen(1818,() => {
    console.log("Listening at port 1818");
  });
