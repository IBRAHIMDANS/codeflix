const sqlite = require("sqlite3");
const db = new sqlite.Database("myDb");

let userSession;

class userModel {
  static create(user, res) {
    db.run(
      `INSERT INTO user (nickname,email,password) 
    VALUES('${user.nickname}',
           '${user.email}',
           '${user.password}')`,
      (err, row) => {
        if (err) {
          res.send("Unexpected error :", err);
        } else {
          res.send("Created");
        }
      }
    );
  }

  static getAll(res) {
    db.all(`SELECT * from user`, (err, row) => {
      if (err) res.send(err);
      else if (row) {
        console.log(row);
        res.send(row);
      } else res.send("Nothing found");
    });
  }

  static getUser(id, res) {
    db.get(`SELECT * from user where id = ${id}`, (err, row) => {
      if (err) {
        res.send(err);
      } else if (row) {
        res.send({
          id: idSelected,
          nickname: row.nickname,
          email: row.email,
          password: row.password
        });
      } else {
        res.send("Nothing found");
      }
    });
  }

  static update(user, res) {
    db.run(
      `UPDATE user set 
              nickname = '${user.nickname}', 
              email = '${user.email}',
              password = '${user.password}' 
              WHERE id = '${user.id}'`,
      err => {
        if (err) res.send(err);
        else res.send("Updated");
      }
    );
  }

  static delete(id, res) {
    db.get(`DELETE  from user where id = ${id}`, (err, row) => {
      if (err) res.send(err);
      else res.send(`User has been successfully deleted :{"id" : ${id}`);
    });
  }

  static login(data,req,res) {
    userSession = req.session;
    
    if(userSession.username){
      res.send("You'r already logged");
    }else{
      db.get(`SELECT * FROM user WHERE nickname='${data.username}' AND password='${data.password}'`, (err,row) => {
        if(err){
          res.send(err);
        }else{
          if(row){
            userSession.username = row.nickname;      
            res.redirect('/logged');
          }else{
            res.redirect('/login');
          }
        } 
      });
    }
  }

  static register(data,req,res){
    userSession = req.session;
    
    if(userSession.username){
      res.send("You'r logged in, please logout to register");
    }else{
      db.run(`INSERT INTO user(nickname,password) VALUES('${data.username}','${data.password}')`);
      res.send("Successfully registered");
    }
  }

  static loginPage(req, res) {
    if (req.session.username) {
      res.redirect('/logged')
      return;
    }
    res.render('../view/login.ejs')
  }

  static loggedPage(req, res) {
    if (!req.session.username) {
      res.redirect('/login')
      return;
    }
    res.render('../view/logged.ejs')
  }
}

module.exports = userModel;
