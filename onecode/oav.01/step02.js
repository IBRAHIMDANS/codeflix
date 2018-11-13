const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();

const db = new sqlite3.Database('data/demodb02.sql');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, nickname TEXT , email TEXT, password TEXT)");
  db.run("INSERT INTO users (nickname, email, password) VALUES (?, ?,?)" ,"Ibra", "0@live.fr","ppa");
  db.run("INSERT INTO users (nickname, email, password) VALUES (?, ?,?)","hima", "0@google.com","app");
})
app.get('/users/:id', (req, res) => {
  idd = req.params.id.slice(1)
  db.get(`SELECT * FROM users WHERE id = ${idd}  `, (err, row) => {
    res.json({
      "id": idd,
      "nickname": row.nickname,
      "email": row.email,
      "password": row.password
  })
  })
})
app.get(['/users'], (req, res) => {

  db.all(`SELECT * FROM users  `, (err, row) => {
    res.json(row)
  })
})


app.listen(2000)
