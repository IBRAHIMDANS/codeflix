const express = require("express");
const sqlite = require("sqlite3");
const bodyParser = require("body-parser");
const app = express();
const db = new sqlite.Database('myPocket');
// const faker = require("faker");
// var data = ({
//   firstName: faker.name.firstName(),
//   email: faker.internet.email(),
//   password: faker.internet.password()
//
// });
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, nickname TEXT, email TEXT, password TEXT )");
  // for (var i = 0; i < 6; i++) {
  //     db.run("INSERT INTO user (nickname,email,password) VALUES (?,?,?) ", data.firstName ,data.email,data.password);
  // }
});
/////////////////// SELECT ////////////////////////////////
app.get("/users", function (req, res) {
  //res.status(200).send({ message: 'Here all users of the db' });
  db.all("SELECT * from user",(err,raw)=>{
    res.json(raw);
  })

});

app.get("/users/:id", function (req, res) {
  //res.status(200).send({ message: 'Here all users of the db' });
  const idSelected = req.params.id.slice(1);
  db.get(`SELECT * from user where id = ${idSelected}`,(err,raw)=>{
    res.json({
      "id" : idSelected,
      "nickname" : raw.nickname,
      "email" : raw.email,
      "password" : raw.password

    });
  })

});

app.delete("/users/:id", function (req, res) {
  const idSelected = req.params.id.slice(1);
  db.get(`DELETE from user where id = ${idSelected}`,(err,raw)=>{
    res.send(` User has been successfully deleted :{"id" : ${idSelected}`);
  })
  res.end()
});

app.put("/users", function (req, res) {
  const data ={
    nickname : req.body.nickname,
    email : req.body.email,
    password : req.body.password
  }

  db.run("INSERT INTO user (nickname,email,password) VALUES (?,?,?) ",data.firstName ,data.email,data.password)

  res.end()
})
app.put("/users", function (req, res) {

  db.run("UPDATE users SET nickname = ?", req.query.nickname, (err, row)=>{
    if (err) res.status(500);
    else res.status(202);  });
    res.end()
  })

  app.listen(1818);
  //db.close();
