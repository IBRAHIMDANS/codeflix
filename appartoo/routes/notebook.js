var express = require('express');
var router = express.Router();

const NotebookModel = require('../models/notebook');


router.get('/:id', function(req, res, next) {
  const id = req.params.id

console.log(id);

  NotebookModel.getNote(req,res,id)
});

router.post('/Connexion', function(req, res, next) {
  const data = {
  username: req.body.username,
  password: req.body.password,
};
  userModel.addNote(data,req,res);
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
router.delete('/user', function(req, res, next) {
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
