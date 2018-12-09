var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var jade = require('ejs');
// var Sequelize = require('sequelize');
const session = require('express-session');
var sqlite = require('sqlite3');


var usersRouter = require('./routes/notebook');
var indexRouter = require('./routes/users');



var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.listen(8080,() => {
  console.log("Listening at port 8080");
});


app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/note', usersRouter);
app.use(session({
  key: "usersId",
  secret : 'sessionkey',
  resave : false,
  saveUninitialized: false,
  cookie : {expires : 60000}
}));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title : `Error` });
});
const db = new sqlite.Database("data/Appartoo.sqlite");
db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS users(id_user INTEGER PRIMARY KEY AUTOINCREMENT,firstname TEXT,lastname TEXT,email TEXT,username TEXT, password Text, age INTEGER, familly Text,food TEXT,race TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS notebook (id_notebook INTEGER PRIMARY KEY AUTOINCREMENT,firstname TEXT,lastname TEXT,email TEXT,familly Text,address TEXT,id_user INTEGER,FOREIGN KEY(id_user) REFERENCES users(id_user))");
});

// Create my bdd
// const db = new Sequelize('database','root','azerty',{
//   dialect: 'sqlite',
//   storage : 'data/Appartoo.sqlite'
// })
//
// const userModel = db.define('users',{
//   firstname : {type : Sequelize.STRING},
//   lastname : {type : Sequelize.STRING},
//   email : {type : Sequelize.STRING},
//   username : {type : Sequelize.STRING},
//   password : {type : Sequelize.STRING},
//   age : {type : Sequelize.INTEGER.UNSIGNED},
//   familly : {type : Sequelize.STRING},
//   food : {type : Sequelize.STRING},
//   race : {type : Sequelize.STRING},
// })
// const notebookModel = db.define('notebook',{
//   firstname : {type : Sequelize.STRING},
//   lastname : {type : Sequelize.STRING},
//   email : {type : Sequelize.STRING},
//   age : {type : Sequelize.INTEGER.UNSIGNED},
//   familly : {type : Sequelize.STRING},
//   food : {type : Sequelize.STRING},
//   race : {type : Sequelize.STRING},
// })
//
// userModel.belongsTo(notebookModel);


module.exports = app;
