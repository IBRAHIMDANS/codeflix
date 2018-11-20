const express = require("express");
const sqlite = require("sqlite3");
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const session = require('express-session');

const db = new sqlite.Database("myPocket");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookie())
app.use(session({
  key: "usersId",
  secret : 'sessionkey',
  resave : false,
  saveUninitialized: false,
  cookie : {expires : 60000}
}));

app.use((req,res,cb)=>{
  if (req.cookies.usersId && !req.session.user) {
    res.clearCookies('usersId')
  }
  cb()
})


app.get("/",(req,res)=>{
  console.log(req.cookies);
});


app.post("/login",(req, res) => {
  const data = {
    nickname: req.body.nickname,
    password: req.body.password,
  };

  db.get(`SELECT * FROM user WHERE nickname='${data.nickname}' AND password='${data.password}'`, (err, row) => {
    if(err)
      throw err;

    res.json(row);
  });
});

app.post("/register", (req,res) => {
  const data = {
    nickname: req.body.nickname,
    password: req.body.password,
  };

  db.run(`INSERT INTO user(nickname,password) VALUES('${data.nickname}','${data.password}')`, err => {
    if(err)
      throw err;

    res.end(`User ${data.nickname} successfully registered !`);
  });
});

app.listen(1818);
