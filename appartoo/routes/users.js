var express = require('express');
var router = express.Router();

const userModel = require('../models/users');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'home', err : "" });
});
router.get('/inscription', function(req, res, next) {
  res.render('inscription', { title: 'inscription' });
});
router.post('/Connexion', function(req, res, next) {
  const data = {
  username: req.body.username,
  password: req.body.password,
};
  userModel.login(data,req,res);

});

router.post('/inscription', function(req, res, next) {
  const data = {
    username : req.body.username,
    password : req.body.password,
  }
  userModel.create(data, res);
});
router.put('/user', function(req, res, next) {
  const data = {
    id : req.body.id,
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email,
    age : req.body.age,
    familly : req.body.familly,
    food : req.body.food,
    race : req.body.race,
  }
  console.log(data);
  userModel.update(data, res);
});

module.exports = router;
